import React, {useState,  useEffect, useRef } from 'react'; //imr
import axios from "axios";
import {render} from 'react-dom'
import Navigation from '@components/navigation/header';
import { useNavigate } from "react-router-dom";
import whitelogo from "@images/snagem_logo_white.png";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Gusers from '@components/user/gaiaonlineusers.js';
import { mixed } from 'yup';

const StringOrUndefinedSchema = yup.lazy((value) => {
  switch (typeof value) {
    case 'undefined':
      return yup.string().default('myDefaultString');
    case 'string':
      return yup.string().strict();
    default:
      throw new yup.ValidationError("Value must be a string or `undefined`"); 
  }
});

const schema=yup.object().shape({
  username: yup.string().required("Username is required."),
  email: yup.string().email("Must be a valid email.").required("Email is required."),
    nouser: yup.number(),
    gaiaonline:yup.string().when('nouser',{
      is:(value)=>value===1,
      then: yup.string().oneOf(Object.values(Gusers)).required()
    }), 
    password:yup.string().when('nouser',{
      is:(value)=>value===1,
      then: yup.string().required("Password Required").min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number") //pw schema
    }), 
    confirmpassword:yup.string().when('nouser',{
      is:(value)=>value===1,
      then: yup.string().min(8, "Must be 8 characters or more")
      .required("Password is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("Confirm Password Required.") //confirm pw schema
    }), 
    application: yup.string().when('nouser',{
      is:(value)=>value===0,
      then:yup.string().min(500).max(3000).required()
    }),
    // application: yup.string().when('gaiaonline',{
    //   is:(value)=>!!value||value.length===0,
    //   then:yup.string().min(500).max(3000).required()
    // })
   
});



const Register = () => {

  const submitForm=async(values)=>{
    //console.log(values);  
    setSubmitB(false);
        await axios
      .post(`${url}users/userApplication.php`, {values})
      .then((result) => {
        if(result.data===1){
          setFinalmsg('Registration successful. Please wait while we send your verification email.');  
          
        }else if(result.data===2) {     
    setTimeout(() => { 
      setFinalmsg('Your application has been received properly and will be examined soon. Page will close in 8s.');
      navigate("/");
  }, 8000)
        }else {
          setFinalmsg(result.data);      
          setSubmitB(true);
        }
      });
      sendemail(values);
     
    };

    const sendemail=async(val)=>{
      console.log(oldUser);
      oldUser?
      await axios
      .post(`${url}users/registerUser.php`, {val})
      .then((results) => {
        //setFinalmsg(results.data);
        setFinalmsg('Please check your email to complete the verification process. Page will close in 8s.');
    setTimeout(() => { 
      navigate("/");
  }, 8000)
       
      })
      :null
    }

  const {register, handleSubmit, formState: { errors }}=useForm({
    resolver: yupResolver(schema),
  });

  const place = "Login";
  let navigate = useNavigate();
  const url = process.env.API_URL;
  const [submitB, setSubmitB] = useState(true);
  const [gvalue, setGvalue] = useState('');
  const [finalmsg, setFinalmsg] = useState('');
  const [oldUser, setOldUser] = useState(false);
  const [userName, setUserName] = useState(sessionStorage.getItem("username") ? true : false);


useEffect(()=>{
  userName ? navigate("/profile") : null;
},[]);


//   const handleR=async(e)=>{
//     e.preventDefault();//disable button
//     setSubmitB(false);
//     const formData=new FormData(form.current);
//     if(formData.get('email')) {
//     const data_login_reset={   
//       email:formData.get('email'),
//     }
    
//     const result = await axios
//       .post(`${url}users/loginreset.php`, {
//        data_login_reset:data_login_reset
//       })
//       .then((result) => {
        
//         console.log(result.data);
        
          
//       });
      
// }else {alert("Form must be filled.");setSubmitB(true);}
//   }

 let formuser= useRef();

    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12  min-h-screen">
      
      <div className="parentContainerBaseP0 col-span-12 flex gap-1 sm:flex-row flex-col">
        
        <div className='w-full p-2 text-center flex flex-col bg-gradient-to-r from-purple-500 to-pink-500 text-whiteC'>
        <img src={whitelogo} alt="snagem logo in white"
          className='w-20 invert' />
            <h1 className="title">Apply to Join</h1>
            <p className='italic mb-3'>Your application will be reviewed within 48h.</p>
            <div className="flex justify-center">
          <form onSubmit={handleSubmit(submitForm)}>
            
          <div className='grid place-content-center grid-cols-1 md:grid-cols-2 md:gap-8'>

<div>
          <label htmlFor="username" className='font-semibold  flex flex-col text-red-700'><span className='font-normal text-whiteC'>
            Username: *</span> {errors?.username?.message}
            <input type="text" className='form-input' placeholder="Username" {...register("username")} />
           </label>
            

          <label htmlFor="email" className='font-semibold  flex flex-col text-red-700'><span className='font-normal text-whiteC'>
            E-mail: *</span> {errors?.email?.message}
            <input type="email" className='form-input' placeholder="E-mail" {...register("email")} />
           </label>
            
            <label htmlFor="Title GU" className='text-whiteC block'>
              Are you in the gaiaonline Snagem guild?</label>
            <label className="inline-flex items-center"  htmlFor="nouser">

            <input type="radio"  className='form-radio' {...register("nouser")} 
            name="nouser" value="1" onChange={()=>setOldUser(true)} />
            <span className="ml-2 font-semibold">Yes</span>
                </label>
            <label className="inline-flex items-center"  htmlFor="nouser">
            <input type="radio" defaultChecked {...register("nouser")} className='form-radio' 
            name="nouser" value="0" onChange={()=>{setOldUser(false)}} />
            <span className="ml-2 font-semibold">No</span>
                </label>
                
            </div>
            <div>

            {oldUser?
            <>
          <label htmlFor="gaiaonline">Gaiaonline Username: * (Case Sensitive)</label>   
            <input type="text" name="gaiaonline"
            className='form-input' placeholder="Gaia Username" {...register("gaiaonline")} />
            {errors?.gaiaonline?"This username isn't in our database.":null }
            
            <label htmlFor="password" className='font-semibold  flex flex-col text-red-700'>
              <span className='font-normal text-whiteC'>Password: *</span>
            <input type="password" className='form-input' placeholder="*****" {...register("password")}/>
            {errors?.password?.message}</label>
  
   <label htmlFor="confirmpassword" className='font-semibold  flex flex-col text-red-700'>
     <span className='font-normal text-whiteC'>Confirm Password: *</span>
            <input type="password" className='form-input' placeholder="*****" {...register("confirmpassword")} />
            {errors?.confirmpassword?.message}</label>
 
            
          </>
          :
          <>
          <label htmlFor="application" >Application: *</label>
          <span>
            
          </span>
            <textarea placeholder="Type your app here..." 
            className='form-textarea' {...register("application")}></textarea> 
            {errors?.application?.message}
            </>}
            
          
           
            
            <div className="flex flex-col justify-end px-1 py-2">
            {submitB ? 
              <input type="submit" value="Submit" className="btn btn-primary btn-medium" />
              :
              null}
              <div className='quickmsg'> {finalmsg}</div>
            
              </div>
              </div>
              </div>
              </form>
              </div>
              </div>
        </div>
        </main>
        </>
    )
}

export default Register;