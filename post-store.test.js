const axios = require("axios");
const { APi_URL } = require("./config");
test("Get all store in apple", () => {
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
      expect(response.status).toContain(201);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
});
