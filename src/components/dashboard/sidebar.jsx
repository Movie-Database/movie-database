import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Elements } from "./elements";
import "./sidebar.scss";
import InputBase from "@material-ui/core/InputBase";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";

import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "fff" }}>
      <div className="sidebar">
        <div className="left">
          <Link to="#" className="menu-bar">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className="middle">
          <InputBase
            id="search"
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="right">
          
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            
          
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bar">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Elements.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default Sidebar;
