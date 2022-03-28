import React, {useState, useRef, useEffect} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";

import {ReactSession }from 'react-client-session';

const Profilemain = () => {
  const place = "Profile";
  let navigate = useNavigate();
  const userName = ReactSession.get("username");
  const loginCheck =(userName ? true : false);

  useEffect(()=>{
    loginCheck ? null : navigate("/login");
  },[]);


    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1">
      <h1 className="title">Profile</h1>
      {userName}

      
        </div>
        </main>
        </>
    )
}

export default Profilemain;