import React, { useRef } from 'react'

export function Ref() {
    const inputRef=useRef()
    const handleClick=()=>{
        console.log(inputRef.current.value)
    }
  return (
    <div>
       <h4>Ref Example</h4> 
<input type="text" ref={inputRef}/>
<button onClick={handleClick}>get value</button>
    </div>
  )
}

