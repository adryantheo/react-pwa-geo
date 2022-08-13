import React, {useState, useEffect, Fragment} from 'react'

export default function Counter() {
    let [count, setCount] = useState(0)
    let [koor, setkoor] = useState()
    let [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        getGeoLocation()
    },[])

    const getGeoLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            (data)=>{
                setkoor(data.coords.latitude +','+data.coords.longitude)
            },
            (err)=>{
                console.log(err.message)
                setIsVisible(true)
            }
        )
    }
    const increment = () => { setCount (count + 1) }
    const decrement = () => { setCount (count - 1) }

  return (
    <div style={{textAlign: 'center'}}>
        <h3>Counter App</h3>
        <div>
            <button variant="contained" onClick={increment}>+</button>
            <span> {count} </span>
            <button variant="contained" onClick={decrement}>-</button>
        </div>
        <h3>{koor}</h3>
        {
            isVisible ?
            <Fragment>
                <button onClick={getGeoLocation}>Turn On Location</button>
                <button onClick={window.close}>Don't Turn On Location</button>
            </Fragment>
            :
            <></>
        }
    </div>
  )
}