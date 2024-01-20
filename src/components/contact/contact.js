import React from 'react'

import './contact.scss'
import * as IoIcons from "react-icons/io"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className={'section'}>
            <div className={'titleBox'}>
                <h1 className={'title'}>Contact</h1>
            </div>
            <div className={'contact'}>
                <p className='contact__info'><IoIcons.IoIosMail /> brittany.lapointe60@gmail.com</p>
                <p className='contact__info'><MdOutlinePhoneAndroid /> (506) 987-3586</p>
                <a className='contact__info' href='https://www.linkedin.com/in/brittany-lapointe-0083ba151/' target="_blank" rel="noreferrer"><FaLinkedin /> Check out my LinkedIn!</a>
            </div>  
        </div>
    )
}

export default Contact