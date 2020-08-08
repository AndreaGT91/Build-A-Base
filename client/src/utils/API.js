import axios from "axios";

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

  // Returns array of maps, representing each non-header row in spreadsheet
  // Key names are the column header names
  readSpreadsheet: function(fileName) {
    axios.post("/api/xlsx", { filename: fileName })
      .then(response => { 
        const data = [];
        let rowMap;

        // Convert row objects to maps to preserve property order; convert to integer if number
        response.data.forEach(row => {
          rowMap = new Map();
          
          for (let key in row) {
            if (isNaN(row[key])) {
              rowMap.set(key, row[key]);
            }
            else {
              rowMap.set(key, parseInt(row[key]));
            }
          };
          data.push(rowMap);
        });
        
        return data 
      })
      .catch(error => {
        console.log("Error reading spreadsheet ", error);
        return [];
      });
  }


//   Iterating Map with for..of
// Maps can be iterated using a for..of loop:

// let myMap = new Map()
// myMap.set(0, 'zero')
// myMap.set(1, 'one')

// for (let [key, value] of myMap) {
//   console.log(key + ' = ' + value)
// }
// // 0 = zero
// // 1 = one

// for (let key of myMap.keys()) {
//   console.log(key)
// }
// // 0
// // 1

// for (let value of myMap.values()) {
//   console.log(value)
// }
// // zero
// // one

// for (let [key, value] of myMap.entries()) {
//   console.log(key + ' = ' + value)
// }
// // 0 = zero
// // 1 = one


// Iterating Map with forEach()
// Maps can be iterated using the forEach() method:

// myMap.forEach(function(value, key) {
//   console.log(key + ' = ' + value)
// })
// // 0 = zero
// // 1 = one

};