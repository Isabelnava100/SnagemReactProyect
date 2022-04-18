import React from 'react'; //imr
import Navigation from '@components/navigation/header';
import Stuff from '@components/user/moneyitems';
import logo from '@images/snagem_logo.png';

const place="Userpage";

//slr shortcut for this:
const Userpage = () => {
  
    return (
      <>
      <Navigation place={place}/>

<main className="grid grid-cols-12">
  
<div className="parentContainerBase col-span-12 sm:col-start-3 sm:col-span-8 text-center ">


<h1 className='biggest text-primary my-6'>Typography</h1>
  <span className='m-2 text-lg block'>
  Using TailwindCSS config, fonts are saved into classes for easy access.
</span>

  <div className='grid grid-cols-2 gap-4 mb-6 md:place-items-center place-items-start mx-2'>
<div className='flex text-left flex-col'>
<h2 className='font-manrope-medium mt-5'>Manrope</h2>
  <span className='font-manrope-medium block'>Font 'Manrope Medium' is default for the body.</span>
  <span className='font-manrope-light block'>Manrope Extra Light</span>
  <span className='font-manrope-regular block'>Manrope Light</span>
  <span className='font-manrope block'>Manrope Basic</span>
  <span className='font-manrope-medium block'>Manrope Medium</span>
  <span className='font-manrope-semibold block'>Manrope Semi Bold</span>
  <span className='font-manrope-bold block'>Manrope Bold</span>
  <span className='font-manrope-extrabold block'>Manrope Extra Bold</span>
  </div>
  
<div className='flex text-left flex-col hidden'>
<h2 className='font-open-sans mt-5'>Open Sans</h2>
  <span className='font-open-sans-light block'>Open Sans Extra Light</span>
  <span className='font-open-sans-medium block'>Open Sans Light</span>
  <span className='font-open-sans-regular block'>Open Sans Basic</span>
  <span className='font-open-sans-italic block'>Open Sans Italic</span>
  <span className='font-open-sans-semibolditalic block'>Open Sans Semi Bold Italic</span>
  <span className='font-open-sans block'>Open Sans Medium</span>
  <span className='font-open-sans-bold block'>Open Sans Bold</span>
  <span className='font-open-sans-bolditalic block'>Open Sans Bold Italic</span>
  <span className='font-open-sans-extrabold block'>Open Sans Extra Bold</span>
  <span className='font-open-sans-extrabolditalic block'>Open Sans Extra Bold Italic</span>
  </div>
  
  
<div className='flex text-left flex-col'>
<h2 className='font-quantico mt-5'>Quantico</h2>
  <span className='font-manrope-medium block'>A fun, mecanical font for making titles and buttons stand out.</span>
  <span className='font-quantico-italic block'>Quantico Italic</span>
  <span className='font-quantico-regular block'>Quantico Light</span>  
  <span className='font-quantico block'>Quantico Basic</span>  
  <span className='font-quantico-bold block'>Quantico Bold</span>
  <span className='font-quantico-bolditalic block'>Quantico Bold Italic</span>
  </div>
  </div>

  
  <h1 className='title text-primary'>Site Title</h1>
  <span className='m-2 text'>
  We've made a simplified adaptation of the logo using the Manrope font.</span>
  <h1 class="text-4xl m-2 uppercase font-bold underline-offset-2">
    SNAGEM<span class="font-extralight"> HEADQUARTERS</span></h1>

<h1 className='biggest text-primary mt-16'>Color</h1>
<div className='flex items-center justify-center'>
<img src={logo} alt="snagem logo basic" 
className='w-40 m-2' />
<span className='m-2 text-lg'>  
Colors are based on the Snagem logo and TailwindCSS assets. The colors will automatically change depending on the selected theme by the user. Optionally, when a holiday such as Easter or Christmas rolls by a special theme will be made available.
</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 place-content-center">
  <div className='bg-white pb-6 rounded flex flex-col'>
<h1 className='title text-purple-800'>Default Theme</h1>

<div className='flex flex-wrap justify-center gap-1'>
<div className='bg-purple-800 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y'>
  Primary Color<br/>Purple 800<br/>#6b21a8</div>
<div className='bg-indigo-700 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y'>
  Secondary Color<br/>Indigo 700<br/>#4338ca</div>
<div className='bg-slate-800 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y'>
  Neutral Color<br/>Slate 800<br/>#1e293b</div>
<div className='bg-white text-xs text-center w-32 h-24 flex justify-center items-center text-black rounded-lg border-x border-y'>
  Background<br/>White<br/>#ffffff</div>
    </div>
  </div>
  <div className='bg-neutral-800 pb-6 rounded flex flex-col'>
<h1 className='title text-violet-500'>Darkest Theme</h1>

<div className='flex flex-wrap justify-center gap-1'>
<div className='bg-violet-500 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y border-black'>
  Primary Color<br/>Violet 500<br/>#8b5cf6</div>
<div className='bg-indigo-900 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y border-black'>
  Secondary Color<br/>Indigo 900<br/>#312e81</div>
<div className='bg-blue-900 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y border-black'>
  Neutral Color<br/>Blue 900<br/>#1e3a8a</div>
<div className='bg-neutral-800 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y border-black'>
  Background<br/>Neutral 800<br/>#262626</div>
    </div>
  </div>

  <div className='bg-rose-200 pb-6 rounded flex flex-col'>
<h1 className='title text-rose-400'>Easter Theme</h1>

<div className='flex flex-wrap justify-center gap-1'>
<div className='bg-rose-400 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y'>
  Primary Color<br/>Rose 400<br/>#fb7185</div>
<div className='bg-pink-800 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y'>
  Secondary Color<br/>Pink 800<br/>#9d174d</div>
<div className='bg-fuchsia-900 text-xs text-center w-32 h-24 flex justify-center items-center text-white rounded-lg border-x border-y'>
  Neutral Color<br/>Fuchsia 900<br/>#701a75</div>
<div className='bg-rose-200 text-xs text-center w-32 h-24 flex justify-center items-center text-rose-800 rounded-lg border-x border-y'>
  Background<br/>Rose 200<br/>#fecdd3</div>
    </div>
  </div>

  </div>
  
  <h1 className='title text-primary'>Buttons</h1>
  <span className='m-2 text-lg block'>
  Button sizes are used by importance of content.<br/>
  Colors above are all set into classes for easy use.<br/>
  Red and green are set permanent in all themes for critical admin decisions.
</span>
<div className=' grid place-content-center'>
  <div>
  <button className="btn btn-large btn-primary m-1 block sm:inline">Large Button</button>
      <button className="btn btn-medium btn-secondary m-1 block sm:inline">Medium</button>
      <button className="btn btn-small btn-neutral m-1 block sm:inline">Small</button><br className='sm:block hidden'/>
      <button className="btn btn-medium btn-cancel m-1 block sm:inline">Important Cancel</button>
      <button className="btn btn-medium btn-accept m-1 block sm:inline">Important Accept</button>
      </div></div>


  <h1 className='biggest text-primary mb-8 mt-16'>Form Inputs</h1>
<div className='grid place-content-center grid-cols-1 md:grid-cols-3 md:gap-4'>
  <div>
  <label className="block">
            <span className="font-semibold">Input</span>
            <input
              type="text"
              className="form-input"
              placeholder="john@example.com"
            />
          </label>

  <label className="block">
            <span className="font-semibold">Select</span>
            <select className="form-select">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
    </div>
          <label className="block">
            <span className="font-semibold">Textarea</span>
            <textarea
              className="form-textarea h-24"
              rows="3"
              placeholder="Enter some long form content."
            ></textarea>
          </label>
          <div className="flex gap-4">
          <div className="inline">
            <span className="font-semibold">Checkboxes</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input className="form-checkbox" type="checkbox" />
                  <span className="ml-2">Option 1</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input className="form-checkbox" type="checkbox" />
                  <span className="ml-2">Option 2</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input className="form-checkbox" type="checkbox" />
                  <span className="ml-2">Option 3</span>
                </label>
              </div>
            </div>
          </div>
          <div className="inline">
            <span className="font-semibold">Radio Buttons</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input className="form-radio" type="radio" name="radio-direct" value="1" />
                  <span className="ml-2">Option 1</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input className="form-radio" type="radio" name="radio-direct" value="2" />
                  <span className="ml-2">Option 2</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input className="form-radio" type="radio" name="radio-direct" value="3" />
                  <span className="ml-2">Option 3</span>
                </label>
              </div>
            </div>
          </div>
          </div>

</div>



</div>

  </main>
  </>
    )
}

export default Userpage;