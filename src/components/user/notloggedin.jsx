import React from 'react'; //imr
import { Link } from "react-router-dom";
import Navigation from '@components/navigation/header';
import sableye from '@images/JUSTASABLEYE-min.png'

const Notli = () => {
  const place = "Profile";

    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12 gradient-pink h-screen">
      
      <div className="col-span-12 grid gap-1 text-center text-slate-300">
        <img src={sableye} alt="cute sableye eating a gem" width="300" height="323" className='m-auto'/>
      <h2>
      You are not logged in.
      <Link
              to="/login"
              className="underline block"
            >
              Click here to head to the login page.
            </Link>
            </h2>
        </div>
        </main>
        </>
    )
}

export default Notli;