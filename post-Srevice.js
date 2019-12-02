const axios = require("axios");
const { APi_URL } = require("./config");
const headers = {
  "Content-Type": "application/json; charset=utf-8"
  //Accept: "application/json; charset=utf-8"
};
axios({
  method: "post",
  url: `${APi_URL}services/`,
  data: {
    name: "new name"
  }
})
  .then(function(response) {
    // handle success
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
