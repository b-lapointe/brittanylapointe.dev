import React from "react"
import MemeHeader from "./memeHeader"
import MemeGenerator from "./memeGenerator"

import * as memeGenStyles from './memeGen.module.scss'

function MemeGenApp() {
    return (
        <div className={memeGenStyles.app}>
            <MemeHeader />
            <MemeGenerator />
        </div>
    )
}

export default MemeGenApp