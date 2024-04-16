import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect/dist/core'

function TextOverlay() {
useEffect(() => {
    new Typewriter('#heading',{
        strings: ['Discover the key to stress-free apartment hunting', 'Navigate the urban jungle with ease', 'Join the apartment hunting revolution', 'Find your sanctuary in the chaos of city life'],
        autoStart: true, 
        loop: true,
        delay: 15,
        deleteSpeed: 45,
        
    }).pauseFor(1000);
    // console.log('u1 invoked')
    // console.log('u3 invoked')
},[])

    return (
        <div className="d-flex align-items-center flex-column justify-content-center" style={{minHeight:"100vh"}}>
           <div className='d-flex align-items-center flex-column'>

            <h1 id='heading' className='text-white'></h1>
           </div>
        </div>
    )
}

export default TextOverlay
