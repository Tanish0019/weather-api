const request = require("request");
const { DARKSKY_KEY } = require("./../config");
 const getWeather = (lat, lng) => {
 	return new Promise((resolve, reject) => {
	 	let weatherURL = `https://api.darksky.net/forecast/${DARKSKY_KEY}/${lat},${lng}`;
		request({
			url: weatherURL,
			json: true
		}, (error, response, body) => {
			if(!error && response.statusCode === 200){
				resolve({
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature
				});
			} else {
				reject("Unable to fetch weather");
			}
		});
	});
};

module.exports = {
	getWeather
};