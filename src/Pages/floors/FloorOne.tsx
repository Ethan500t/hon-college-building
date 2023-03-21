import { PageProps } from "../Page";

export function FloorOne({pageName, className}: PageProps, ...props: any) {
   let GeneralBox = "m-4 p-4 bg-gray-200 rounded-lg";
  return (
   <>
   <div className="my-4 text-center w-full ">
         <h1 className="text-3xl">Floor One</h1>
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
         <div className={"col-span-8 " + GeneralBox}>
            <h2 className="text-xl p-2">The Atrium</h2>
            <p className="text-lg p-2">
            Idea behind atrium
            </p>
         </div>
         <div className="col-span-2">
         </div>
         <div className="col-span-1"></div>
   </div>
   </>
  );
}
