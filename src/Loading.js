import { useEffect } from "react";

function Loading({got})
{
 useEffect(()=>{
  const inter=setTimeout(() => {
   document.querySelector("dialog").showModal();
   
  }, 100);
  const interv=setTimeout(() => {
    document.querySelector("dialog").close();
   
   }, 6000);
  return () => clearInterval(inter,interv);
  
 },[got])
  return(
    <>
    <dialog>
      <div className="initial">
        <span className="parent">
      <span className="child1">
        <span className="child2"></span>
        <span className="child3"></span>
      </span>
    </span>
  </div>
    </dialog>
</>
  )
}

export default Loading;