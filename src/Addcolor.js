import {useState} from "react";
import { Colorbox } from "./Colorbox";

export function Addcolor(){
  const[color,setColor]=useState("blue")
  const[colorlist,setColorlist]=useState(["aqua","green","black"])
  const styles={
    backgroundColor:color
  }
  return(
<div>
 <div>
  <input type="text" style={styles} value={color} onChange={(event)=>setColor(event.target.value)} />
  <button onClick={()=>setColorlist([...colorlist,color])}>ADD COLOR</button>
  </div>
  {colorlist.map((clr)=>(
    <Colorbox clr={clr}/>
  ))}
</div>

  )
}