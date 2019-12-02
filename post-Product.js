const axios = require("axios");
const { APi_URL } = require("./config");
const headers = {
  "Content-Type": "application/json; charset=utf-8"
  //Accept: "application/json; charset=utf-8"
};
axios({
  method: "post",
  url: `${APi_URL}products/`,
  data: {
    name: "New Product",
    type: "Hard Good",
    upc: "12345676",
    price: 99.99,
    description: "This is a placeholder request for creating a new product.",
    model: "NP12345"
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
