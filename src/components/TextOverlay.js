import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect/dist/core'

function TextOverlay() {
useEffect(() => {
    new Typewriter('#heading',{
        strings: ['heading here', 'paragraph here'],
        autoStart: true, 
        loop: true,
        delay: 75,
    }).pauseFor(1000);
    console.log('text overlay')
})

    return (
        <div className="d-flex align-items-center flex-column justify-content-center" style={{minHeight:"100vh"}}>
           <div className='d-flex align-items-center flex-column'>

            <h1 id='heading' className='text-white'></h1>
            <p id='paragraph'></p>
           </div>
        </div>
    )
}

export default TextOverlay
