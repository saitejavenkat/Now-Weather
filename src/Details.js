import { floor } from 'lodash';
import { useState, useEffect ,useRef} from 'react';
import Contact from './Contact';
import Loading from './Loading';
import MapComponent from './MapComponent';

function Details({data_get }) {
    const [time, setTime] = useState({});
    const [srcLink, setSrc] = useState({});
    const tag=useRef();
    const scrollToTag1 = () => {
      if (tag.current) {
        tag.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    useEffect(() => {
      const intervalId = setInterval(() => {
        const curr_time = new Date();
        const hour = curr_time.getUTCHours();
        const time_zone = data_get?.timezone;
        const minute = curr_time.getUTCMinutes();
        const accur_time = time_zone / 3600;
        const round_time = floor(accur_time);
        const diff_time = floor((accur_time - round_time) * 60);
        let set_min = minute + diff_time;
        let set_hour = hour + round_time;
        if (set_min > 60) {
          set_hour += 1;
          set_min -= 60;
        }
        setTime({
          hours: set_hour,
          minutes: set_min,
          date: curr_time.getDate(),
          day: curr_time.getDay(),
          month: curr_time.getMonth() + 1,
          year: curr_time.getFullYear(),
          seconds: curr_time.getSeconds(),
        });
        
      }, 500);
      return () => clearInterval(intervalId);

    }, [data_get]);
    useEffect(() => {
      const inter=setTimeout(()=>{
        switch (data_get?.weather[0]?.main) {
          case 'Clear':
            setSrc(!(time.hours >= 18 || time.hours < 6)
              ? { vid_link: "https://videos.pexels.com/video-files/11025494/11025494-sd_960_506_30fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlySunnyDay.svg" }
              : { vid_link: "https://videos.pexels.com/video-files/3128132/3128132-sd_640_360_24fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/ClearNightV3.svg" });
            break;
          case 'Mist':
            setSrc(!(time.hours >= 18 || time.hours < 6)
              ? { vid_link: "https://videos.pexels.com/video-files/854691/854691-sd_640_360_30fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlySunnyDay.svg" }
              : { vid_link: "https://videos.pexels.com/video-files/15040626/15040626-sd_640_360_25fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyClearNight.svg" });
            break;
          case 'Rain':
            setSrc(!(time.hours >= 18 || time.hours < 6)
              ? { vid_link: "https://videos.pexels.com/video-files/2491284/2491284-sd_960_506_24fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/LightRainShowerDay.svg" }
              : { vid_link: "https://videos.pexels.com/video-files/7043616/7043616-sd_640_360_25fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/N310LightRainShowersV2.svg" });
            break;
          case 'Clouds':
            setSrc(!(time.hours >= 18 || time.hours < 6)
              ? { vid_link: "https://cdn.pixabay.com/video/2017/05/14/9151-217588665_large.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/CloudyV3.svg" }
              : { vid_link: "https://cdn.pixabay.com/video/2017/08/02/11103-228192366_large.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/PartlyCloudyNightV2.svg" });
            break;
          case 'Haze':
            setSrc(!(time.hours >= 18 || time.hours < 6)
              ? { vid_link: "https://videos.pexels.com/video-files/7440470/7440470-sd_640_360_25fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg" }
              : { vid_link: "https://videos.pexels.com/video-files/4999944/4999944-sd_640_360_30fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyClearNight.svg" });
            break;
          default:
            setSrc(!(time.hours >= 18 || time.hours < 6)
              ? { vid_link: "https://videos.pexels.com/video-files/11025494/11025494-sd_960_506_30fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlySunnyDay.svg" }
              : { vid_link: "https://videos.pexels.com/video-files/3128132/3128132-sd_640_360_24fps.mp4", img_link: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/ClearNightV3.svg" });
            break;
          
        }
      
  },4000);
      return () => clearInterval(inter);
      
    }, [time.hours]);
   
  useEffect(()=>{
    setTimeout(() => {
      setSrc({...srcLink,vid_link:"",img_link:""})
      
    }, 100);
    scrollToTag1();
  },[data_get?.name])
    const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    return (
      <>
            <Loading got={data_get?.name}/>
            <div className='data'>
            { srcLink.vid_link&&(
              <video autoPlay loop muted type="video/mp4" >
                  <source src={srcLink.vid_link} />
                </video>
            )
}
             <div className='city-heading'>
             
                <header>
                  <sub>
                { srcLink.img_link&&(<img src={srcLink.img_link} alt='Weather-logo'/>)}
                </sub>
                  {data_get?.name}
                 
                  
                </header>
              </div>

              <div className='weather-re' ref={tag}>
                <div className='current-weather'>
                  <header className="heading city">Location Name:</header>
                  <span className='city'>&nbsp; {data_get?.name}</span>
                  <br/>
                  <header className="heading">Country Name:</header>
                  <span>&nbsp; {data_get?.sys?.country}</span>
                  <br/>
                  <header className="heading">Lon:</header>
                  <span>&nbsp;{data_get?.coord?.lon}</span>
                  <br/>
                  <header className="heading">Lat:</header>
                  <span>&nbsp;{data_get?.coord?.lat}</span>
                  <br/>
                  <header className="heading">Temp:</header>
                  <span>&nbsp;{data_get?.main?.temp}°C</span>
                  <br/>
                  <header className="heading">Weather:</header>
                  <span>&nbsp;{data_get?.weather[0]?.main}</span>
                  <br/>
                  <header className="heading">Time:</header>
                  <span>&nbsp;{time.hours}:{time.minutes}:{time.seconds}</span>
                  <br/>
                  <header className="heading">Date:</header>
                  <span>&nbsp;{time.date}-{time.month}-{time.year}, {days[time.day]}</span>
                  <br/>
                </div>     
                <MapComponent lon={data_get?.coord?.lon} lat={data_get?.coord?.lat} className="map"/>
                
                </div>
                
              </div>
              <Contact year={time.year}/>
              
             
       </>
        )}
    
export default Details;  