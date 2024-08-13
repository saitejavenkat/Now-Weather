import { useEffect, useState} from 'react';
import Details from './Details';
import Input_Loc_Data from './Input_Loc_Data';
import Live_Details from './Live_Details';

   function Forms() 
   {
    const [state,set_State]=useState({block:false})
    const [clicked,set_clicked]=useState(false)
    const [weather,set_Weather]=useState();
   
 
useEffect(()=>{
  if(clicked)
    {
      console.log(state.choice) 
      state.choice==="live"?Live_Details().then((data)=>{
        set_Weather(data);
        
      })
    :Input_Loc_Data(state.inp_loc).then((data)=>{
      set_Weather(data)
     })
    
}},[clicked])
    
   useEffect(()=>{
    set_clicked(!clicked)
   },[weather])
    
    return (
      <>
        <div className='form-dat'>
          <form> 
            <span>
            <label>Choose: </label>
            <select value={state.choice} onChange={(e) =>{set_State({...state,choice:e.target.value}
            )
            }}>
              <option value="" >Select Option</option>
              <option value="manual">Manual Location</option>
              <option value="live">Live Location</option>
            </select>
            </span>
            {state.choice === 'manual' && (
              <span>
                <label className="loc">Locality: </label>
                <input 
                  type='text' 
                  name='locality' 
                  id='local' 
                  
                  onChange={(e) => {
                    set_State({...state,inp_loc:e.target.value})
                  }
                }
                />
              </span>
            )}
            <button type='submit' onClick={(e)=>{
              e.preventDefault();
              set_clicked(!clicked)
            }}>Get Data</button>
          </form>
        </div>
        
      { weather?.name &&( 
        <Details data_get={weather} />
      )
      }
    

      </>
    );
  }
  export default Forms;