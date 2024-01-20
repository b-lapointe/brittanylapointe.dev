import React from 'react'
import * as IoIcons from "react-icons/io"
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
    {
        title: 'About',
        path: '#about',
        icon: <IoIcons.IoMdPerson />,
    },
    {
        title: 'Projects',
        path: '#projects',
        icon: <AiIcons.AiOutlineCode />,
    },
    {
        title: 'Contact',
        path: '#contact',
        icon: <IoIcons.IoIosMail />,
    }
]