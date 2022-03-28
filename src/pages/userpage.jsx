import React from 'react'; //imr
import Navigation from '@components/navigation/header';
import Stuff from '@components/user/moneyitems';

const place="Userpage";

//slr shortcut for this:
const Userpage = () => {
  
    return (
      <>
      <Navigation place={place}/>

<main className="grid grid-cols-12">
  
    <div className="parentContainerBase col-span-12 md:col-span-4 md:order-last">

      <h1 className="text-6xl font-bold text-primary">Reset styles</h1>
      <h2 className="text-4xl font-bold text-secondary">Smaller</h2>
      
      <Stuff/>
      <p className="mt-2 text-lg">
        These are form elements this plugin styles by default.
      </p>
      <p className="mt-2 text-sm italic">
        These are form elements this plugin styles by default. Caption
      </p>
      <button className="btn btn-large bg-primary hover:opacity-90 m-1">Visit new website</button>
      <button className="btn btn-medium bg-secondary hover:opacity-90 m-1">check it out</button>
      <button className="btn btn-medium bg-neutral hover:opacity-90 m-1">Go</button><br/>
      <button className="btn btn-small bg-cancel hover:opacity-90 m-1">NO</button>
      <button className="btn btn-small bg-accept hover:opacity-90 m-1">X</button>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start bg-backgroundContainer border-2 rounded-lg border-backgroundLayout">
        <div className=" grid grid-cols-1 gap-6">
          <label className="block">
            <span className=" bg-backgroundGradient px-4 border-backgroundLayout border-2 rounded-lg">Input (text)</span>
            <input
              type="text"
              className="form-input"
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="">Input (email)</span>
            <input
              type="email"
              className="form-input"
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="">Input (email, multiple)</span>
            <input
              type="email"
              multiple
              className="form-input"
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="">Input (password)</span>
            <input
              type="password"
              className="form-input"
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="">Input (date)</span>
            <input type="date" className="form-input" />
          </label>
          <label className="block">
            <span className="">Input (datetime-local)</span>
            <input type="datetime-local" className="form-input" />
          </label>
          <label className="block">
            <span className="">Input (month)</span>
            <input type="month" className="form-input" />
          </label>
          <label className="block">
            <span className="">Input (number)</span>
            <input type="number" className="form-input" />
          </label>
          <label className="block">
            <span className="">Input (search)</span>
            <input type="search" className="form-input" />
          </label>
          <label className="block">
            <span className="">Input (time)</span>
            <input type="time" className="form-input" />
          </label>
          <label className="block">
            <span className="">Input (week)</span>
            <input type="week" className="form-input" />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="">Input (tel)</span>
            <input
              type="tel"
              multiple
              className="form-input"
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="">Input (url)</span>
            <input
              type="url"
              multiple
              className="form-input"
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="">Select</span>
            <select className="form-select">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
          <label className="block">
            <span className="">Select (multiple)</span>
            <select className="form-multiselect" multiple="">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </label>
          <label className="block">
            <span className="">Textarea</span>
            <textarea
              className="form-textarea h-24"
              rows="3"
              placeholder="Enter some long form content."
            ></textarea>
          </label>
          <div className="block">
            <span className="">Checkboxes</span>
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
          <div className="block">
            <span className="">Radio Buttons</span>
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