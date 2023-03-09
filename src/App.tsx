import { useState } from "react";
import { USFLogo } from "./assets/USFLogo";
import { Page } from "./Pages/Page"


function App() {

  const [currentPage, setCurrentPage] = useState("overview");

  const navButtonClasses = "text-white bg-green-800 hover:bg-green-900  font-medium text-sm px-5 py-2.5 mr-2 h-full"

  return (
    <>

      <nav className="h-16 border-gray-200 px-2 sm:px-4 py-2.5 bg-green-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <USFLogo className="h-8 mx-2"/>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <button onClick={() => setCurrentPage("overview")} className={navButtonClasses}> Overview </button>
            <button onClick={() => setCurrentPage("floorPage")} className={navButtonClasses}> Floors </button>
            <button onClick={() => setCurrentPage("leed")} className={navButtonClasses}> LEED </button>
            <button onClick={() => setCurrentPage("otherStuff")} className={navButtonClasses}> Not Sure Yet </button>
              
          </div>
        </div>
      </nav>
      
      <Page pageName={currentPage} className={""}/>
      
    </>
  )
}

export default App
