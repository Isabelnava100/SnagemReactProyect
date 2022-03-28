import React from 'react'; //imr

//slr shortcut for this:
const App = () => {
    return (
<main class="grid grid-cols-12 gap-4 p-4">
      <div className="bg-backgroundGradient w-full h-16 col-span-12 ">nav </div>

      <div className="parentContainerBase col-span-12 flex gap-4">

      <div className="test-left">
      <p className="mt-2 text-lg">
        These are form elements this plugin styles by default.
      </p>
      <div className="insideContainer">
      <h2 className="text-4xl font-bold text-secondary">Smaller</h2>
      
       </div>
        </div>

        <div className="test-right">
      <p className="mt-2 text-lg">
        These are form elements this plugin styles by default.
      </p>
        </div>

        </div>

  </main>
    )
}

export default App;