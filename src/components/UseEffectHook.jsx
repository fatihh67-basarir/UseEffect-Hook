import { useState, useEffect } from "react"



const UseEffectHook = () => {

    const[count, setCount] = useState(0);

    //! ComponentDidMount
    // useEffect(() => {
    //   console.log("Mounted");
    //   setTimeout(() => {
    //     alert("Data Fetch")
    //   },3000)
    // }, [])

    // ! ComponentDidMount + ComponentDidUpdate
    // useEffect(() => {
    //   console.log("Mounted" + "Update");
    //   setTimeout(() => {
    //     alert("Data Fetch")
    //   },3000)
    // }, [count])

    //! ComponentDidMount + ComponentWillUnmount
    const fetchData = () => {
        console.log("Data Fetched");
    };
    useEffect(() => {
      const timerId = setInterval( fetchData, 1000)
      console.log("Mounted");
    
      return () => {
        clearInterval(timerId)
        console.log("unmount");
      }
    }, [])
    
    
    
    console.log("rendered");
  return (
    <div>
        <h1>UseEffect</h1>
        <h3>count:{count} </h3>
        <button onClick={() => setCount(count + 1)  }>INC</button>
    </div>
  )
}

export default UseEffectHook