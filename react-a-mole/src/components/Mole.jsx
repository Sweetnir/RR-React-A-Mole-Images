import mole from "../embedded/mole.png";
import { useEffect } from "react";


export default function Empty({setIsShowing}) {
    useEffect(() =>{
        let randMillis = Math.ceil(Math.random() * 5000 + 1000);
        let timer = setTimeout(() =>{
            setIsShowing(false)
        }, randMillis)

        return () => clearInterval(timer);
        
    }, []);



  return (
    <div>
      <img style={{ width: "30vw" }} src={mole} />
    </div>
  );
}