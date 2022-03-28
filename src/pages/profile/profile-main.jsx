import React, {useState, useRef, useEffect, useContext} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
//import AppContext from '@context/AppContext';
import Notli from "@components/user/notloggedin";
import {useLogOut} from "@hooks/fnctn/useLogout.js";

const Profilemain = () => {
  
  const place = "Profile";
  let navigate = useNavigate();
  //const {state}=useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const url = process.env.API_URL;
  let userName = sessionStorage.getItem('username');
  let userToken = sessionStorage.getItem('token');
 //when checking for access of session username, also check for token
 //if session username exists but token doesn't match, 
 //delete all sessions, from php



useEffect(async () => {
  const result = await axios
    .post(`${url}users/profile.php`, {
      username: userName,
      token:userToken,
    })
    .then((result) => {
      if(result.data==1) { 
        setLoading(true)
      }
        else{
        useLogOut();
        navigate("/login");}
      }
        );
            
}, []);

    return (
      <>
      {userName ?
      (loading ?(
      <>
      <Navigation place={place}/>
      
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1">
      <h1 className="title">Profile</h1>
      
      <div className="flex justify-end px-1 py-2">
              <button type="submit" className="btn bg-backgroundGradient btn-small hover:bg-secondary" 
              onClick={()=>{useLogOut();navigate("/");}}>Logout</button>
              
                </div>
      {userName}
      <br/>
      
      Roles: test.
      <div className="grid">

      </div>
      
        </div>
        </main>
        </>
        ): 
        <>
        <Navigation place={place}/>
        <div className="loading-container"><h1>Currently Loading...</h1></div>
        </>
        ):<Notli/>}
        
        </>
    )
}

export default Profilemain;