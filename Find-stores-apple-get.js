const axios = require("axios");
const { APi_URL } = require("./config");

axios({
  method: "get",
  url: `${APi_URL}stores?service.name=Apple Shop`
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
