import React from "react"

import * as contactCardStyles from "./card.module.scss"
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"

function ContactCard(props) {
    console.log(props)
    return (
        <div className={contactCardStyles.card}>
            <img className={contactCardStyles.profilePic} src={props.contact.imgUrl} alt={"Cat"}/>
            <h3>{props.contact.name}</h3>
            <div className={contactCardStyles.info}>
                <FaIcons.FaPhone className={contactCardStyles.icon}/>
                <p>Phone: {props.contact.phone}</p>
            </div>
            <div className={contactCardStyles.info}>
                <IoIcons.IoIosMail className={contactCardStyles.icon}/>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}

export default ContactCard