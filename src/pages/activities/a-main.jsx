import React from 'react'; //imr
import Navigation from '@components/navigation/header';
import wip from "@images/openingsoonbanner.png";

const place="Activities";

//slr shortcut for this:
const Activitiesmain = () => {
 
    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1">
         
      <p className="mt-2 text-lg justify-center flex">
      
      <img src={wip} alt="opening soon" width="700"/>
      </p>

        </div>
        </main>
        </>
    )
}

export default Activitiesmain;