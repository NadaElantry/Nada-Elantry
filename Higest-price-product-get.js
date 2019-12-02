const axios = require("axios");
const { APi_URL } = require("./config");

axios({
  method: "get",
  url: `${APi_URL}products?$sort[price]=1`
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
