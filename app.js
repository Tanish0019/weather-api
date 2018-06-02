const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

//Setting up yargs for input
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			//make sures that it parses through it as a string and not anything else
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

//PROMISES METHODS
geocode.geocodeAddress(argv.a)
	.then(results => {
		console.log("address: ", results.address);
		return weather.getWeather(results.latitude, results.longitude);
	})
	.then(weatherResults => {
		console.log(`it's currently ${weatherResults.temperature} farenheit. It feels like ${weatherResults.apparentTemperature} farenheit.`);
	})
	.catch(errorMessage => {
		console.log(errorMessage);
	});


//CALLBACK METHOD
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		//the second argument is useless ignore it
// 		// the third argument is number of indents per line or something
// 		// console.log(JSON.stringify(body, undefined, 2));
// 		// console.log(JSON.stringify(results, undefined, 2));
// 		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
// 			if (errorMessage) {
// 				console.log(errorMessage);
// 			} else {
// 				console.log("address: ", results.address);
// 				// console.log(JSON.stringify(weatherResults, undefined, 2));
// 				console.log(`it's currently ${weatherResults.temperature} farenheit. It feels like ${weatherResults.apparentTemperature} farenheit.`);
// 			}
// 		});
// 	}
// });



