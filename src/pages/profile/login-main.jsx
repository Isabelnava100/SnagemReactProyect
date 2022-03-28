import React, {useState, useRef, useEffect, useContext} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
//import AppContext from '@context/AppContext';

const Loginmain = () => {
  //const {loginCheck}=useContext(AppContext);
  //const {state}=useContext(AppContext);

  const place = "Profile";
  let navigate = useNavigate();
  const url = process.env.API_URL;
  const [submitB, setSubmitB] = useState(true);
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
    
    const result = await axios
      .post(`${url}users/login.php`, {
       data_login:data_login
      })
      .then((result) => {
        const basic=['Wrong username','Wrong password','Email not verified','Too many requests'];
        //console.log(result.data);
          if(basic.includes(result.data)) {
            alert(result.data);
            if(result.data==='Too many requests') {}else {setSubmitB(true);}
        }else {
          sessionStorage.setItem("username", user);
          sessionStorage.setItem("token", result.data);
          navigate("/profile");
        }
        

          
      });
      
}else {alert("Form must be filled.");}
  }

    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1">
        
            <h1 className="title">Log In</h1>
            <div className="flex justify-center">
          <form action="/" className="flex flex-col max-w-100" ref={form}>
            
          <label htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="Username" required/>
          <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="******" required/>
            
            <div className="flex justify-end px-1 py-2">
            {submitB ? 
              <button type="submit" className="btn bg-backgroundGradient btn-small" 
              onClick={handleSubmit}>Log In</button>
              :
              null}
             
              </div>
              </form>
              </div>

        </div>
        </main>
        </>
    )
}

export default Loginmain;