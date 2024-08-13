import apiKey from "./Constant";

function Input_Loc_Data(Name)
{
    return new Promise(async (resolve,reject)=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${Name}&appid=${apiKey}&units=metric`;
              try {
                const response = await fetch(url);
                const data = await response.json();
                resolve(data)
              } catch (error) {
               
                reject('Error fetching weather data:', error)
              }
              
    })
}
export default Input_Loc_Data;