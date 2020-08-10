import axios from "axios";
import path from "path";

import mongoose from "mongoose"; // TODO: For referencing ObjectID

export default {

  // Get user info
  getOneUser: function(email) {
    return axios.get("/api/user/" + email);
  },

  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  updateUser: function(userData) {
    return axios.put("/api/user", userData);
  },

  getBasesByUser: function(id) {
    return axios.get("api/bases/id");
  },

  createBase: function(baseData) {
    return axios.post("api/base", baseData);
  },

  updateBase: function(baseData) {
    return axios.put("api/base", baseData);
  },

  deleteBase: function(id) {
    return axios.delete("api/base/" + id);
  },

  getCustom: function(baseName, baseModel) {
    return axios.get("api/custom/" + baseName, baseModel);
  },

  createCustom: function(baseName, baseModel) {
    return axios.post("api/custom/" + baseName, baseModel);
  },

  updateCustom: function(baseName, baseModel) {
    return axios.put("api/custom/" + baseName, baseModel);
  },

  deleteCustom: function(baseName, id, baseModel) {
    return axios.delete("api/custom/" + baseName + "/" + id, baseModel);
  },

  readSpreadsheet: function(fileName) {
    axios.post("/api/xlsx", { filename: fileName })
      .then(response => { 
        const fileData = response.data;

        if (fileData.length === 0) {
          return []
        };

        // First row contains column headers, which will be field names
        const firstRow = fileData[0]; 
        let secondRow;
        // Need second row to get data types; if only one row, just use it again
        if (fileData.length === 1) { secondRow = fileData[0] } 
        else { secondRow = fileData[1] };
        
        const baseModel = [];
        let newField;

        // Create pairs of field name and field type to create model for new collection model
        firstRow.forEach((header, index) => {
          newField = new Object();
          newField.fieldName = header;

          // Make sure cell data is not null or undefined
          if (!secondRow[index]) {
            newField.fieldType = "String";
          }
          else if (secondRow[index].match(/^\d{4}\-\d{2}\-\d{2}$/)) {
            newField.fieldType = "Date";
          }
          else if (isNaN(secondRow[index])) {
            newField.fieldType = "String";
          }
          else {
            newField.fieldType = "Number";
          };

          baseModel.push(newField);
        });

        const newBase = {
          creatorID: mongoose.Types.ObjectId("5f2f6c59137ead7a45a692ea"),  // TODO: Need ID of current user
          baseName: path.basename(fileName, path.extname(fileName)),
          model: baseModel
        };

        fileData.shift(); // Remove first item, which is just the headers

        // Add entry to Bases collection, then add records to new custom collection
        this.createBase(newBase)
          .then(() => axios.post("/api/custom/" + newBase.baseName, { baseModel: newBase.model, data: fileData }))
          .then(() => this.getCustom(newBase.baseName, newBase.model))
          // TODO: Just for testing .then((response) => {return response})
          .then((response) => {
            console.log(response);
            return response
          })
          .catch(error => {
            console.log("Error creating database: ", error);
            return []
          });
      })
      .catch(error => {
        console.log("Error reading file: ", error)
        return []
      });
  }
};