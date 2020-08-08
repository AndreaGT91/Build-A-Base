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
  }
  // data.forEach( function ( m ) {

  //   for ( var key in m ) {
  
  //     console.log( key ); // "who"
  //     console.log( m[key] ); // "Arthur"
  
  //   }
  
  // });
};