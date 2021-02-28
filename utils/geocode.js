const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1Ijoic3llZDAwNyIsImEiOiJja2xqbWExY2cyaTNiMm9tbGlmNHl1NGdjIn0.BrnDmKAusXRjmD27yFXagg&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect !", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location try again !", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
