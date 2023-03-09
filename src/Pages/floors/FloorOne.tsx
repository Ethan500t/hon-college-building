import { PageProps } from "../Page";

export function FloorOne({pageName, className}: PageProps, ...props: any) {
  return (
    <div className="p-4">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 ">
         <p className="text-2xl text-gray-400 ">Photo</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">Overview</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
         </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 ">
         <p className="text-2xl text-gray-400 ">+</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
         </div>
      </div>
   </div>
</div>
  );
}
