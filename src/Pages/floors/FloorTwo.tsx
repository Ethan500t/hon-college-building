
import { PageProps } from "../Page";

export function FloorTwo({pageName, className}: PageProps, ...props: any) {
  let GeneralBox = "m-4 p-4 bg-gray-200 rounded-lg";
    return (
      <>
      <div className="my-4 text-center w-full ">
            <h1 className="text-3xl">Floor Two</h1>
      </div>
      <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className={"col-span-10 " + GeneralBox}>
               <h2 className="text-xl p-2">What's on this Floor?</h2>
               <p className="text-lg p-2">
               Outdoor amphitheater, study spaces, ons.
               </p>
            </div>
            <div className="col-span-1"></div>
      </div>
      <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-2">
            </div>
            <div className={"col-span-8 " + GeneralBox}>
               <h2 className="text-xl p-2">Study Spaces</h2>
               <p className="text-lg p-2">
               We have multiple styles of study spaces for students to make use of. Both indoor and outdoor, as well as small group and large group settings. 
               There are high top tables, small study lofts, as well as large study lofts.
               </p>
            </div>
            <div className="col-span-1"></div>
      </div>
      </>
    );
}
  