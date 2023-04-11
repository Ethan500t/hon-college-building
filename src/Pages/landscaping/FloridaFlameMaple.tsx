import { PageProps } from "../Page";
import floridaFlameMaple from "../../assets/florida-flame-maple.jpg";

export function FloridaFlameMaple({pageName, className}: PageProps, ...props: any) {
   let GeneralBox = "m-4 p-4 bg-gray-200 rounded-lg";
  return (
   <>
   <div className="my-4 text-center w-full ">
         <h1 className="text-3xl">Florida Flame Maple</h1>
   </div>
   <div className="grid grid-cols-12">
         <div className="col-span-1"></div>
         <div className={"col-span-10 " + GeneralBox}>
            <h2 className="text-xl p-2">What is on this Floor?</h2>
            <p className="text-lg p-2">
            On this floor you are able to view the atrium, 
            </p>
         </div>
         <div className="col-span-1"></div>
   </div>
   <div className="grid grid-cols-12">
         <div className="col-span-1"></div>
         <div className={"col-span-6 " + GeneralBox}>
            <h2 className="text-xl p-2">The Atrium</h2>
            <p className="text-lg p-2">
            Idea behind atrium
            </p>
         </div>
         <div className="col-span-4 p-4">
            <img className="rounded-xl" src={floridaFlameMaple}></img>
         </div>
         <div className="col-span-1"></div>
   </div>
   </>
  );
}
