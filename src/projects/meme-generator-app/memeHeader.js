import React from "react"

import * as memeGenHeaderStyles from './memeGenHeader.module.scss'

function MemeHeader() {
    return (
        <header className={memeGenHeaderStyles.headerBkg}>
            <div className={memeGenHeaderStyles.memeGenHeader}>
                <img 
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                    alt="Problem?"
                />
                <h1>Meme Generator</h1>
            </div>
        </header>
    )
} 

export default MemeHeader