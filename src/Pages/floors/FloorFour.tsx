import { PageProps } from "../Page";

export function FloorFour({pageName, className}: PageProps, ...props: any) {
  let GeneralBox = "m-4 p-4 bg-gray-200 rounded-lg";
    return (
      <>
      <div className="my-4 text-center w-full ">
            <h1 className="text-3xl">Floor Four</h1>
      </div>
      <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className={"col-span-10 " + GeneralBox}>
               <h2 className="text-xl p-2">What is on this Floor?</h2>
               <p className="text-lg p-2">
               Class rooms, quiet study spaces, academic advising offices.
               </p>
            </div>
            <div className="col-span-1"></div>
      </div>
      <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-2"></div>
            <div className={"col-span-8 " + GeneralBox}>
               <h2 className="text-xl p-2">Honors College Description</h2>
               <p className="text-lg p-2">
               Overview of the Honors College.
               </p>
            </div>
            <div className="col-span-1"></div>
      </div>
      </>
    );
}