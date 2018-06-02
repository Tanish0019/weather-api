const request = require("request");
const { GEOCODE_KEY } = require("./../config");
geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		let encodedAddress = encodeURIComponent(address);
		let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GEOCODE_KEY}`; 
		request({
			url: url,
			json: true
		}, (error, response, body) => {
			if(error) {
				reject("Unable to connect to Google servers");
			} else if(body.status === "ZERO_RESULTS") {
				reject("Unable to find the address");
			} else if(body.status === "OK") {
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				});
			} else {
				reject("Unidentified error");
			}
		});
	});
};

module.exports = {
	geocodeAddress
};
