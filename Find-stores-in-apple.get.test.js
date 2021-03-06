const axios = require("axios");
const { APi_URL } = require("./config");
test("Get all store in apple", () => {
  axios({
    method: "get",
    url: `${APi_URL}stores?service.name=Apple Shop`
  })
    .then(function(response) {
      // handle success
      console.log(response);
      expect(response.status).toContain(200);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
});
