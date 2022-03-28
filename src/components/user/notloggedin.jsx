import React from 'react'; //imr
import { Link } from "react-router-dom";
import Navigation from '@components/navigation/header';

const Notli = () => {
  const place = "Profile";

    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1">
      You are not logged in.
      <Link
              to="/login"
              className="underline"
            >
              Click here to head to the login page.
            </Link>
      
        </div>
        </main>
        </>
    )
}

export default Notli;