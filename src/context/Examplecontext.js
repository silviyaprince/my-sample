import React, { createContext, useContext } from 'react'
import { Sample1 } from './Sample1';
import { Ref} from './Ref';
import { Reducer } from './Reducer';

const Namecontext=createContext()
export  function Examplecontext() {
    const name="Cathlyn";
   
  return (
    <Namecontext.Provider value={name}>
    <div>
{/* {name}
<Sample />
<Sample1 /> */}
<Reducer/>
    </div>
    </Namecontext.Provider>
  )
}

export const useGlobalContext=()=>{
    return useContext(Namecontext)
}

export  function Sample() {
    const nm=useContext(Namecontext)
  return (
    <div>hello {nm}</div>
  )
}



