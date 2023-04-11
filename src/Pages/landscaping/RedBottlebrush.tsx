import { PageProps } from "../Page";
import redBottlebrush from "../../assets/red-bottlebrush.jpg";

export function RedBottlebrush({pageName, className}: PageProps, ...props: any) {

    let GeneralBox = "m-4 p-4 bg-gray-200 rounded-lg";

    return (
      <div>
        <div className="my-4 text-center w-full ">
                <h1 className="text-3xl">Red Bottlebrush</h1>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className={"col-span-10 " + GeneralBox}>
                    <h2 className="text-xl p-2">What is on this Floor?</h2>
                    <p className="text-lg p-2">
                    First floor with class rooms, more study spaces, IT office, Computer Lab, Faculty offices.
                    </p>
                </div>
                <div className="col-span-1"></div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className={"col-span-6 " + GeneralBox}>
                    <h2 className="text-xl p-2">Class Rooms</h2>
                    <p className="text-lg p-2">
                    Description of classrooms/ types as well as amenities
                    </p>
                </div>
                <div className="col-span-4 p-4">
                    <img className="rounded-xl" src={redBottlebrush}></img>
                </div>
                <div className="col-span-1"></div>
            </div>
      </div>
    );
}