const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=330333a5a0ce95f64541fb2bc3fb7a42&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to  connect !", undefined);
    } else if (body.error) {
      callback("unable to find location !", undefined);
    } else {
      callback(
        undefined,
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
