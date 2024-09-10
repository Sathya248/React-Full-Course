import React from 'react'
import GrowingPlant from '../GrowingPlant/GrowingPlant'

function Home() {

    const plantData1 = {
        name: 'rose ',
        icon: '🌹',
        size: 50,
        aboutMe:[
            "queen of flowers", 
            "Roses are of many colours",
            "Diverse varieties and colors",
        ]

    }

    const plantData2 = {
        name: 'Sunflower',
        icon: '🌻',
        size: 50,
        aboutMe:["Sunflower is beautiful flowers",
            "It is yellow in color",
            "It always faces towards the sun",
        ]
    }
    return (
        <div>
            <h1>Welcome to Home</h1>
            <GrowingPlant plantData={plantData1}/>
            <GrowingPlant plantData={plantData2}/>
            {/* <GrowingPlant/> */}
            
        </div>
    )
}

export default Home