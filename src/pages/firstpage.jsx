import React from 'react'; //imr
import Navigation from '@components/navigation/header';
import wip from "@images/openingsoonbanner.png";
import blob from "@images/blob.svg";
import { Link } from 'react-router-dom';

const place="Homepage";

//slr shortcut for this:
const Home = () => {
 
    return (
      <>
      <Navigation place={place}/>
      
      <main className="grid grid-cols-12">
      
      <div className="text-blackC flex flex-col col-span-12">
         
      <div className="flex flex-col w-full sm:w-1/2 px-4 nav-calc-height justify-center ">

      <img  src={blob}
            loading="lazy" alt="pretty background" className='hidden'
          />
          <span className='text-primary font-manrope-bold font-bold text-xs my-2 uppercase'>The Snagem Guild</span>
           <h1 className='font-bold text-4xl tracking-widest my-3'>
             A new imagined way of 
             <i>story telling.</i></h1>
      <p className='my-1'>A simple and easy to get started fantasy role-playing forums based on the Pokemon games.</p>
      
         </div>


         <div className=" flex-col sm:pr-20 sm:flex-row flex min-h-96 h-auto pb-4 sm:pb-0">
           <div className='w-full sm:w-1/3'>
           <img src={wip} alt="opening soon" className="w-full h-full bg-black hidden" loading="lazy"/>
           </div>
         <div className="mt-2 justify-center content-center flex flex-col w-full sm:w-2/3 p-4">
     <span className='font-bold uppercase text-xl tracking-widest text-primary text-center'> What is Team Snagem?</span>
     <span className='my-2 p-1 uppercase text-xs tracking-wider bg-primary text-white text-center'> 
     It's time to snag them all!
     </span>
     <p className="mt-2 text-sm">
     We're a group of vigilantes, good nor evil, with a single purpose; dye the world gray and bring forth absolute freedom and peace for all. To this end we will do whatever it takes. Though we aren't opposed, both the forces of 'light' and 'dark' might stand against our changing of the status quo. Nothing will stop in the way of Team Snagem from achieving our groups of a truly free world. Free of corruption, free of suffering, and most of all free of the Shadow Pokemon threat.
         </p>
         <p className="mt-2 mb-4 text-sm">
         That is where you come in. We can't do this alone, we need recruits like you to further our cause. Should you join us the world will be yours to snag.
         </p>
         <Link to="/register" >
           <button className='btn btn-medium btn-primary'>Apply to Join
           </button></Link> 
      </div>
         </div>


         <div className="flex flex-col py-16 px-8 text-center">
         <h1 className='font-bold uppercase text-xl tracking-widest text-primary my-4'>What do we offer?</h1>
        <div className='flex gap-2'>
         <div className='rounded flex-1 bg-secondary p-4 flex justify-center items-center'>
          Active forums with weekly activities
         </div>
         <div className='rounded flex-1 bg-secondary p-4 flex justify-center items-center'>
          Anual events and special celebrations
         </div>
         <div className='rounded flex-1 bg-secondary p-4 flex justify-center items-center'>
          Friendly and inclusive community and discord server
         </div>
         </div>
         </div>
    
         <div className="pb-5 pt-2 px-8 sm:px-40 min-h-44 text-center">
         <p className="mt-2 text-sm">
         Although this site is still growing, you can check out the behind the scenes of what it's taken to make this site!
         </p> <p className="mt-2 mb-3 text-sm">
         Below you can check out the style guide and steps of progress it's taken to build the site.
         </p> 
          <Link to="/userpage"><button className='btn btn-small btn-primary'>Go</button></Link>
         </div>
    
        </div>
        </main>
        </>
    )
}

export default Home;