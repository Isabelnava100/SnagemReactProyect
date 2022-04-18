import React, {useState, useRef, useEffect, useContext} from 'react'; //imr
import axios from "axios";
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import whitelogo from "@images/snagem_logo_white.png";
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema=yup.object().shape({
  password: yup.string().required("Required.").min(8, "Must be 8 characters or more")
  .matches(/[a-z]+/, "One lowercase character")
  .matches(/[A-Z]+/, "One uppercase character")
  .matches(/[@$!%*#?&]+/, "One special character")
  .matches(/\d+/, "One number"),
  confirmpassword: yup.string().min(8, "Must be 8 characters or more")
  .required("Password is required.")
  .when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Both password need to be the same"
    ),
  })
  .required("Confirm Password Required"),
}).required();




const ValidateResetPw = () => {

  let { selector,token } = useParams();

  const submitForm=async(values)=>{
    setSubmitB(false);
  values={...values,'selector':selector,'token':token};
   //send reset here
    result(values);
    };

    

const result = async(values)=>
     await axios
.post(`${url}users/loginupdatepw.php`, {values})
.then((result) => {
  setResponseText(result.data+' You will be redirected in 3s.');
  setTimeout(() => { 
    navigate("/login");
}, 3000)
  
}).catch(err => console.log(err));



  const {register, handleSubmit, formState: { errors }}=useForm({
    resolver: yupResolver(schema),
  });

  const place = "Login";
  let navigate = useNavigate();
  const url = process.env.API_URL;
  const [submitB, setSubmitB] = useState(true);
  const [msgSend, setMsg] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [userName, setUserName] = useState(sessionStorage.getItem("username") ? true : false);
  const form= useRef(null);

  


useEffect(async()=>{  
  userName ? navigate("/profile") : null;
  await axios
  .post(`${url}users/loginresetValidate.php`, {
    selector:selector,
    token:token
  })
  .then((result) => {  
    result.data?
    setMsg(true)
      : setMsg(false)
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
            <h1 className="title">Reset your Password</h1>
            {msgSend?
            
            <div className="flex flex-col justify-center"> 
            <p className='italic mb-3'>Input your new password.</p>
 <form className="flex flex-col justify-center items-center"
 onSubmit={handleSubmit(submitForm)}>
            <div>
            <label htmlFor="password" className='font-semibold'><span className='font-normal'>Password: *</span>
            <input type="password" className='form-input' placeholder="*****" {...register("password")}/>
            {errors?.password?.message}</label>
   </div><div>
   <label htmlFor="confirmpassword" className='font-semibold'><span className='font-normal'>Confirm Password: *</span>
            <input type="password" className='form-input' placeholder="*****" {...register("confirmpassword")} />
            {errors?.confirmpassword?.message}</label>
   </div>
   <div className="flex justify-end px-1 py-2">
   {submitB ? 
     <button type="submit" className="btn btn-primary btn-medium" 
     >Update your Password</button>
     :
     <div className='quickmsg'>{responseText}</div>}
    
     </div>
     </form>
              </div>
              :
              
              <Link to="/forgot/" className='underline italic text-white text-sm'>
               Token is unavailable. You can click here to go reset your password.</Link>
              
            }
           
              </div>
        </div>
        </main>
        </>
    )
}

export default ValidateResetPw;