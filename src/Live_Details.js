import apiKey from "./Constant";
function Live_Details() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
       async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}`;
          try {
            const response = await fetch(url);
            const data = await response.json();
            resolve(data);
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
export default Live_Details;