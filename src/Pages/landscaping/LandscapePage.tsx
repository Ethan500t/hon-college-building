
import { FloridaFlameMaple, DuraHeatRiverBirch, RedBottlebrush, FloorFour, FloorFive } from "."
import { PageProps } from "../Page";
import { useState } from "react";

export function LandscapePage(){
    const navButtonClasses = "text-black bg-gray-200 hover:bg-gray-400 font-medium text-sm px-5 py-2.5 w-full rounded-xl";
    const navButtonDropDownClasses = "text-black bg-gray-200 hover:bg-gray-400 font-medium text-sm px-5 py-2.5 w-full rounded-xl";

    const [currentFloor, setCurrentFloor] = useState("floorOne");

    return(
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div className="grid grid-cols-12">
                <aside id="default-sidebar" className="inline col-span-2 top-0 p-4  z-40 bg-gray-100" aria-label="Sidebar">
                <div className="min-h-[calc(100vh-4rem)]  overflow-y-hidden bg-gray-100 ">
                    <ul className="space-y-2">
                        <li>
                        <button onClick={() => setCurrentFloor("floridaFlameMaple")} className={navButtonClasses}> Florida Flame Maple </button>
                        </li>
                        <li>
                        <button onClick={() => setCurrentFloor("duraHeatRiverBirtch")} className={navButtonClasses}> Dura Heat River Birtch </button>
                        </li>
                        <li>
                        <button onClick={() => setCurrentFloor("redBottlebrush")} className={navButtonClasses}> Red Bottlebrush </button>
                        </li>
                        <li>
                        <button onClick={() => setCurrentFloor("floorFour")} className={navButtonClasses}> Floor 4 </button>
                        </li>
                        <li>
                        <button onClick={() => setCurrentFloor("floorFive")} className={navButtonClasses}> Floor 5 </button>
                        </li>
                        
                    </ul>
                </div>
                </aside>
                <div className="col-span-10">
                <FloorSelect pageName={currentFloor}/>
                </div>
            </div>

        </>
    )
}

function FloorSelect({pageName, className}: PageProps, ...props: any){

    let currentPage: JSX.Element = <></>;

    switch(pageName){
        case "floridaFlameMaple": 
            currentPage = <FloridaFlameMaple className={className}/>;
            break;
        case "duraHeatRiverBirtch": 
            currentPage = <DuraHeatRiverBirch className={className}/>;
            break;
        case "redBottlebrush": 
            currentPage = <RedBottlebrush className={className}/>;
            break;
        case "floorFour": 
            currentPage = <FloorFour className={className}/>;
            break;
        case "floorFive": 
            currentPage = <FloorFive className={className}/>;
            break;
    }

    return currentPage;
}

function FloorDropdown({pageName, className}: PageProps, ...props: any){
    let currentDropdown = <></>;

    switch(pageName){
    }
    return currentDropdown
}
