import React, {useState, useRef, useEffect, useContext} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
import whitelogo from "@images/snagem_logo_white.png";

const ForgotPw = () => {

  const place = "Login";
  let navigate = useNavigate();
  const url = process.env.API_URL;
  const [submitB, setSubmitB] = useState(true);
  const [msgSend, setMsg] = useState('');
  const [userName, setUserName] = useState(sessionStorage.getItem("username") ? true : false);
  const form= useRef(null);

useEffect(()=>{
  userName ? navigate("/profile") : null;
},[]);

  const handleSubmit=async(e)=>{
    e.preventDefault();//disable button
    setSubmitB(false);
    const formData=new FormData(form.current);
    if(formData.get('email')) {
    const data_login_reset={   
      email:formData.get('email'),
    }
    
    await axios
      .post(`${url}users/loginreset.php`, {
       data_login_reset:data_login_reset
      })
      .then((result) => {
        setMsg(result.data)
        //console.log(result.data);
       
          
      });
      
}else {alert("Form must be filled.");setSubmitB(true);}
  }

    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12  min-h-screen">
      
      <div className="parentContainerBaseP0 col-span-12 flex gap-1 sm:flex-row flex-col">
        
        <div className='w-full h-full p-2 text-center flex flex-col bg-gradient-to-r from-purple-500 to-pink-500'>
        <img src={whitelogo} alt="snagem logo in white"
          className='w-20' />
            <h1 className="title">Reset your Password</h1>
            <p className='italic mb-3'>You may only reset your password twice.</p>
            <div className="flex justify-center">
            
          <form action="/" className="flex flex-col max-w-100" ref={form}>
            
          <label htmlFor="username" className='font-semibold'>E-mail:</label>
            <input type="email" name="email" placeholder="E-mail" className='form-input' required/>
            
            <div className="flex justify-end px-1 py-2">
            {submitB ? 
              <button type="submit" className="btn btn-primary btn-medium" 
              onClick={handleSubmit}>Send to email</button>
              :
              <div className='quickmsg'>{msgSend}</div>}
             
              </div>
              </form>
              </div>
              </div>
        </div>
        </main>
        </>
    )
}

export default ForgotPw;