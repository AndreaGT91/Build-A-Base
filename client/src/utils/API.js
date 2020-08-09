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

        const firstRow = fileData[0]; // Only need first row to get field names and types
        const baseModel = [];
        let newField;

        // Find all the field names and field types by looking at first row of data
        for (let key in firstRow) {
          newField = new Object();
          newField.fieldName = key;

          if (firstRow[key].match(/^\d{4}\-\d{2}\-\d{2}$/)) {
            newField.fieldType = "Date";
          }
          else if (isNaN(firstRow[key])) {
            newField.fieldType = "String";
          }
          else {
            newField.fieldType = "Number";
          };

          baseModel.push(newField);
        };

        const newBase = {
          creatorID: mongoose.Types.ObjectId("5f2f6c59137ead7a45a692ea"),  // TODO: Need ID of current user
          baseName: path.basename(fileName, path.extname(fileName)),
          model: baseModel
        };

        // Add entry to Bases collection, then add records to new custom collection
        this.createBase(newBase)
          .then(() => axios.post("/api/custom/" + newBase.baseName, { baseModel: newBase.model, data: fileData }))
          .then(() => this.getCustom(newBase.baseName, newBase.model))
          // .then((response) => {return response})
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