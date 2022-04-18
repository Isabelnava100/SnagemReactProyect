import React, {useState, useRef, useEffect, useContext} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
import Notli from "@components/user/notloggedin";
import {useLogOut} from "@hooks/fnctn/useLogout.js";
import Recentposts from "@components/snag/recentposts";
import Money from "@components/snag/money";
import Itemsuser from "@components/snag/items";
import Activitiesuser from "@components/snag/activities";
import Charactersuser from "@components/snag/characters";
import Utilitiesuser from "@components/snag/utilities";

const Profilemain = () => {
  
  const place = "Profile";
  let navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const url = process.env.API_URL;
  let userName = sessionStorage.getItem('username');
  let userToken = sessionStorage.getItem('token');
  



useEffect(async () => {
  await axios
    .post(`${url}users/profile.php`, {
      username: userName,
      token:userToken,
    })
    .then((result) => {
      console.log(result.data);
      if(result.data==="Error") { 
        useLogOut();
        navigate("/login");
      }
        else{
          setProfile(result.data);
          setLoading(true);     
        }  
      }
        );
            
}, []);

    return (
      <>
      {userName ?
      (loading ?(
      <>
      <Navigation place={place}/>
      
      
      <main className="grid grid-cols-12 place-items-center">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1 max-w-screen-xl">
      
      
      <div className="flex justify-between items-center px-1 py-2">
      <h1 className="text-primary text-xl">Welcome {userName}!</h1>
              <button type="submit" className="btn btn-neutral btn-small" 
              onClick={()=>{useLogOut();navigate("/");}}>Logout</button>
      </div>
      

      <div className="dashboardgrid" >
  <Recentposts lastpost={profile['LastPost']} lasttopic={profile['LastTopic']}/>
  <Charactersuser user={userName}/>
  <Itemsuser items={profile['Items']}/>
  <Money money={profile['Money']}/>
  <Activitiesuser user={userName}/>
  <Utilitiesuser user={userName}/>
  
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