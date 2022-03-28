import React from 'react'; //imr
import Navigation from '@components/navigation/header';

const place="Homepage";

//slr shortcut for this:
const Home = () => {
 
    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="parentContainerBase col-span-12 flex flex-col gap-1">
         
      <p className="mt-2 text-lg">
      first page
      </p>

        </div>
        </main>
        </>
    )
}

export default Home;