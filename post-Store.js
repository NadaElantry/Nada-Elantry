const axios = require("axios");
const { APi_URL } = require("./config");
const headers = {
  "Content-Type": "application/json; charset=utf-8"
  //Accept: "application/json; charset=utf-8"
};
axios({
  method: "post",
  url: `${APi_URL}stores/`,
  data: {
    name: "New Store",
    type: "BigBox",
    address: "123 Fake St",
    address2: "",
    city: "Springfield",
    state: "MN",
    zip: "55123",
    lat: 44.969658,
    lng: -93.449539
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
