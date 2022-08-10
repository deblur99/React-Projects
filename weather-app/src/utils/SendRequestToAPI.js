function sendRequestToAPI(params) {
  const alertContents = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        weatherData = JSON.parse(httpRequest.responseText);
        console.log(weatherData);
        console.log(`Request ${httpRequest.status} OK`);
      } else {
        console.log(`${httpRequest.status} Response error`);
      }
    }
  };

  let weatherData = null;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${params.appid}`;

  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open("GET", URL);
  httpRequest.send();

  return weatherData;
}

export default sendRequestToAPI;
