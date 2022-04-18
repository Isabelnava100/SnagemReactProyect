import React, {useState, useRef, useEffect, useContext} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import whitelogo from "@images/snagem_logo_white.png";


const ValidateUser = () => {

  let { selector,token } = useParams();
    

  const place = "Login";
  let navigate = useNavigate();
  const url = process.env.API_URL;
  const [msgT, setMsgT] = useState('Validating your email...');

  

useEffect(async()=>{  
 
  await axios
  .post(`${url}users/userValidate.php`, {
    selector:selector,
    token:token
  })
  .then((result) => {  
    //navigate("/login")
    setMsgT(result.data);
    setTimeout(() => { 
      navigate("/login");
  }, 3000)
  }).catch(err => console.log(err));
},[]);



    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12  min-h-screen">
      
      <div className="parentContainerBaseP0 col-span-12 flex gap-1 sm:flex-row flex-col">
        
        <div className='w-full h-full p-2 text-center flex flex-col bg-gradient-to-r from-purple-500 to-pink-500'>
        <img src={whitelogo} alt="snagem logo in white"
          className='w-20' />
            <h1 className="quickmsg">{msgT}</h1>
            
           
              </div>
        </div>
        </main>
        </>
    )
}

export default ValidateUser;