import { PageProps } from "./Page";
import leedImg from "../assets/leed.png"

export function Leed({pageName, className}: PageProps, ...props: any) {

    let GeneralBox = "m-4 p-4 bg-gray-200 rounded-lg";

    return (
        <div className={className}>
            <div className="my-4 text-center w-full ">
                <h1 className="text-3xl">Leed Certified</h1>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className={"col-span-10 " + GeneralBox}>
                    <h2 className="text-xl p-2">Intro to Sustainability</h2>
                    <p className="text-lg p-2">
                    Sustainability is a major priority at USF. We strive for every building to be eco-friendly, for the health of our 
                    environment and students. A sustainable building is defined as a building that maintains or improves the quality 
                    of life for those using it, while preserving and incorporating the environment around it. The Judy Genshaft Honors 
                    College has made a great effort to be a modern, sustainable building, maintaining the landscape around it, while 
                    providing all the amenities students of USF have come to expect of our campus. For the effort taken, the Judy Genshaft 
                    Honors College has been awarded the Silver Level LEED Rating.
                    </p>
                </div>
                <div className="col-span-1"></div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className={"col-span-8 " + GeneralBox}>
                    <h2 className="text-xl p-2">What is LEED?</h2>
                    <p className="text-lg p-2">
                    LEED, or Leadership in Energy and Environmental Design, is a set of standards that sets guidelines for sustainable, 
                    cost-efficient, and safe buildings across the world, of all varieties, from commercial to residential. The new Judy 
                    Genshaft Honors College building has been created to meet as many of these guidelines as possible, attaining a Silver 
                    Ranking. Attaining such a ranking is high standard to meet, meaning that the building accounts greatly for it's impact 
                    on global warming, human health, water use, biodiversity, and other similar areas. More information about the Judy Genshaft 
                    Honors College's specific impacts on these areas are given below.
                    </p>
                </div>
                <div className="col-span-2">
                    <img src={leedImg}></img>
                </div>
                <div className="col-span-1"></div>
            </div>
            
        </div>
    );
}