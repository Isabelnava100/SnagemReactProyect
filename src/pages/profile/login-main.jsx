import React, {useState, useRef, useEffect, useContext} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
import bg from "@images/background-gradient-lights-min.jpg";
import whitelogo from "@images/snagem_logo_white.png";
import { Link } from 'react-router-dom';

const Loginmain = () => {

  const place = "Profile";
  let navigate = useNavigate();
  const url = process.env.API_URL;
  const [submitB, setSubmitB] = useState(true);
  const [errmsg, setErrmsg] = useState('');
  const [userName, setUserName] = useState(sessionStorage.getItem("username") ? true : false);
  const form= useRef(null);

useEffect(()=>{
  userName ? navigate("/profile") : null;
},[]);

  const handleSubmit=async(e)=>{
    e.preventDefault();//disable button
    setSubmitB(false);
    const formData=new FormData(form.current);
    if(formData.get('password')&&formData.get('username')) {
        const user=formData.get('username');
    const data_login={   
      username:user,
      password:formData.get('password'),
    }
    setErrmsg('Loading..!');
    await axios
      .post(`${url}users/login.php`, {
       data_login:data_login
      })
      .then((result) => {
        const basic=['Wrong username','Wrong password','Email not verified','Too many requests'];
        //console.log(result.data);
          if(basic.includes(result.data)) {
            setErrmsg(result.data);
            if(result.data==='Too many requests, contact admin.') {}else {setSubmitB(true);}
        }else {
          sessionStorage.setItem("username", user);
          sessionStorage.setItem("token", result.data);
          
          setTimeout(() => { 
            navigate("/profile");
        }, 2000)
        }
        

          
      });
      
}else {alert("Form must be filled.");setSubmitB(true);}
  }

    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBaseP0 col-span-12 flex gap-1 sm:flex-row flex-col">
        
      <div className='sm:w-1/2 w-full relative '>
        <img src={bg} alt="welcome back to snagem" className='max-h-screen w-full sm:h-auto h-40'/>
        <span className='absolute top-0 left-0 w-full h-full grid p-2'>
          <img src={whitelogo} alt="snagem logo in white"
          className='w-10 sm:w-20 absolute top-2 left-2' />
            <h1 className="text-white justify-self-center self-center biggest">
              Welcome back!</h1>
            </span>
              </div>
        <div className='sm:w-1/2 w-full p-2 text-center flex flex-col justify-center'>
            <h1 className="title text-primary">Log In</h1>
            <div className="flex justify-center mb-8">
          <form action="/" className="flex flex-col max-w-100" ref={form}>
            
          <label htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="Username" className='form-input' required/>
          <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="******" className='form-input' required/>
            
            <div className="flex justify-end px-1 py-2">
            {submitB ? 
              <button type="submit" className="btn btn-primary btn-medium" 
              onClick={handleSubmit}>Log In</button>
              :
              null}
              </div>
             <div className='text-red-700 quickmsg'>{errmsg}</div>
              </form>
              </div>
              <Link to="/forgot/" className='underline italic text-slate-500 text-sm'>
                Forgot Password?</Link>
              <span className='mt-3 block'>
                New to Snagem? 
                <Link to="/register/" className='pl-2 underline font-semibold'>
                   Apply to join.</Link></span>
              </div>
        </div>
        </main>
        </>
    )
}

export default Loginmain;