const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2d60328dfb77319a2ac33cb13ec6d1ac&query=" +
    longitude +
    "," +
    latitude +
    "&units=f";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to  connect !", undefined);
    } else if (response.body.error) {
      callback("unable to find location !", undefined);
    } else {
      console.log(
        response.body.current.weather_descriptions[0],
        "It is currently",
        +response.body.current.temperature,
        "out , it feels like ",

        response.body.current.feelslike,

        "out"
      );
    }
  });
};

module.exports = forecast;
