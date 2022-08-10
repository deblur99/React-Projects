function getCurrentLocation() {
  let weatherData = { lat: 0, lon: 0 };

  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude.toFixed();
    let lon = position.coords.longitude.toFixed();

    weatherData = { lat: lat, lon: lon };
  });

  return weatherData;
}

export default getCurrentLocation;
