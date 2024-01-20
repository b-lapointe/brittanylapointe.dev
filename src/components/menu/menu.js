import React, { useState } from "react";
import { Link } from 'gatsby';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";

import * as menuStyles from "./menu.module.scss";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    const closeSidebar = () => setSidebar(false);
  
    return (
      <div className={menuStyles.nav}>
        <IconContext.Provider value={{ color: '#FFFAFF' }}>
          <div
            className={menuStyles.navbar}
            role="button" // Add role attribute for interactive element
            tabIndex={0}   // Add tabIndex to make the element focusable
            onClick={showSidebar}
            onKeyDown={(e) => e.key === 'Enter' && showSidebar()} // Handle Enter key for accessibility
          >
            <button className={menuStyles.menuBars}>
              <FaIcons.FaBars />
            </button>
          </div>
          <div
            className={sidebar ? menuStyles.active : menuStyles.navMenu}
            onClick={closeSidebar}
            onKeyDown={closeSidebar}
            role="button" // Add role attribute for interactive element
            tabIndex={sidebar ? 0 : -1} // Add conditional tabIndex for focusability
          >
            <div className={menuStyles.navMenuItems} role="navigation">
              <div
                className={menuStyles.navbarToggle}
                role="button" // Add role attribute for interactive element
                tabIndex={0}   // Add tabIndex to make the element focusable
                onClick={closeSidebar}
                onKeyDown={(e) => e.key === 'Enter' && closeSidebar()} // Handle Enter key for accessibility
              >
                <button className={menuStyles.menuBars}>
                  <IoIcons.IoMdClose />
                </button>
              </div>
              {SidebarData.map((item, index) => (
                <div key={index} className={menuStyles.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </IconContext.Provider>
      </div>
    );
  };
  
  export default Navbar;