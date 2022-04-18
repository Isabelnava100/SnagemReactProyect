import React from 'react'; //imr
import Navigation from '@components/navigation/header';

const place="Marketplace";

//slr shortcut for this:
const Marketplacemain = () => {
 
    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1">
         
      <p className="mt-2 text-lg justify-center flex">
      Tiny shop redux test:
      </p>

        </div>
        </main>
        </>
    )
}

export default Marketplacemain;