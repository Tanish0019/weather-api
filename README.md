# weather-api
Get the weather of any location by typing in the address

## Getting started
* create a **config.js** file inside the working directory with this content:

  ```
  module.exports = {
	DARKSKY_KEY: <YOUR_DARKSKY_API_KEY>,
	GEOCODE_KEY: <YOUR_GEOCODE_LOCATION_API_KEY>
}

* **npm install**

## Usage
* In the terminal go to the working directory
* **node app.js -a "enter address of the location"**
