const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("lahore", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});

forecast(74.360106, 31.497754, (error, data) => {
  console.log("error", error);
  console.log("data", data);
});
