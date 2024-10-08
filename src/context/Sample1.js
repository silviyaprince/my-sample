import { useGlobalContext } from "./Examplecontext"


export  function Sample1() {
    const n=useGlobalContext()
    return (
      <div>welcome {n}</div>
    )
  }