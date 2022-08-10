import getCurrentLocation from "./GetCurrentLocation";
import sendRequestToAPI from "./SendRequestToAPI";

function getWeatherData() {
  const appid = "4c25a811a149df36ec15091d7f33a22a";
  let params = { lat: 0, lon: 0, appid: appid };

  const currentPosition = getCurrentLocation();
  params.lat = currentPosition.lat;
  params.lon = currentPosition.lon;

  return sendRequestToAPI(params);
}

export default getWeatherData;
