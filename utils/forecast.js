const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2d60328dfb77319a2ac33cb13ec6d1ac&query=" +
    longitude +
    "," +
    latitude +
    "&units=m";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to  connect !", undefined);
    } else if (body.error) {
      callback("unable to find location !", undefined);
    } else {
      console.log(
        body.current.weather_descriptions[0],
        "It is currently",
        +body.current.temperature,
        "out , it feels like ",

        body.current.feelslike,

        "out"
      );
    }
  });
};

module.exports = forecast;
