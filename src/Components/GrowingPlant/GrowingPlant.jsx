import React, { useState, useEffect } from 'react'
import "./GrowingPlant.css"

const defaultData = {
    name: "no name is provided",
    icon: "no icon is provided",
    size: 50,
}



function GrowingPlant({ plantData = defaultData }) {

    // const { plantData = defaultData } = props
    let { name, size, icon, aboutMe } = plantData

    const [dynamicSize, setDynamicSize] = useState(size)

    useEffect(() => {
        const interval = setInterval(() => {
            if (dynamicSize < 130) setDynamicSize(dynamicSize + 20)
        }, 1000)
        return () => clearInterval(interval)
    }, [dynamicSize, name])


    const handleClick = () => {
        setDynamicSize(dynamicSize + 20)
    }

    return (
        <div className='plant'>
            <h3>I am a {name}, I'm Growing</h3>


            <div>
                <span style={{ fontSize: `${dynamicSize}px` }}>{icon}</span>
                {name === 'rose' ? <span>⭐</span> : ''}
            </div>

            <button onClick={handleClick}>Give Water</button>
            {aboutMe.map((points, index) => <div key={index}>{index + 1}.{points}</div>)}


        </div>
    )
}






export default GrowingPlant; 