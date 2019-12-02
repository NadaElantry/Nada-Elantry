const axios = require("axios");
const { APi_URL } = require("./config");
test("Get all store in apple", () => {
  axios({
    method: "post",
    url: `${APi_URL}services/`,
    data: {
      name: "new name 2"
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
