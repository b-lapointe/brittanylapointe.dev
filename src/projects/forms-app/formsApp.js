import React from "react"
import Form from "./formContainer"

import * as formStyles from "./form.module.scss"

function FormsApp() {
    return (
        <div className={formStyles.app}>
            <Form/>
        </div>
         
    )
}

export default FormsApp