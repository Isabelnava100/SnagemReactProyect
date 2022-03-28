import React, { useState,useContext  } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@images/menuicon.svg";
import XIcon from "@images/xicon.svg";
import Submenu from "@components/navigation/submenu";
import AppContext from "@context/AppContext"; 

const Navigation = (props) => {

  const [mainMenuIcon, setMenuIcon] = useState(false);
  const {state:{allRoles}}=useContext(AppContext);
  
  let loginName = (sessionStorage.length ? 'Profile' : 'Login');
  
  const handleMenuVis = () => {
    setMenuIcon(!mainMenuIcon);
  };

  const checkActive= (filterActive) =>{
    return (filterActive == props.place) ? " navbar-active" : "";
  }

  return (
    <header className="bg-backgroundGradient text-slate-100 sticky top-0 shadow-md z-20">
      <nav className="flex items-center justify-between flex-wrap py-4 px-7">
        <div className="flex items-center flex-shrink-0 mr-6 lg:ml-10">
          <h1 className="text-lg m-0 uppercase font-bold underline-offset-2 hover:underline">
           <Link to="/">
            SNAGEM<span className="font-extralight"> HEADQUARTERS</span>
            </Link>
          </h1>
        </div>

        <label
          className="hamburger-icon"
          aria-label="Open navigation menu"
          htmlFor="menu-toggle"
        >
          <img
            src={mainMenuIcon ? XIcon : MenuIcon}
            className="h-6 w-6 cursor-pointer z-20 relative block lg:hidden"
            onClick={handleMenuVis}
          />
        </label>
        <input type="checkbox" id="menu-toggle" />

        <div
          className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto max-h-screen overflow-auto"
          id="navbar"
        >
          <div className="text-sm lg:flex-grow  lg:text-right">
            <Link to="/marketplace" 
            className={'nav-links border-t-2'+checkActive('Marketplace')} 
            >
              Marketplace
            </Link>
            <Link to="/activities" 
            className={'nav-links '+checkActive('Activities')} 
            >
              Activities
            </Link>
            <Link to="/forum/main" 
            className={'nav-links'+checkActive('Forum')} 
            >
              Forum
            </Link>
            <Link to="/users"
            className={'nav-links'+checkActive('Users')} 
            >
              Users
            </Link>
            <Link to={"/"+loginName}
            className={'nav-links'+checkActive('Profile')} 
            >
              {loginName}
            </Link>
          </div>
        </div>
      </nav>

        <Submenu place={props.place} roles={allRoles[0]}  />
        
    </header>
  );
};

export default Navigation;
