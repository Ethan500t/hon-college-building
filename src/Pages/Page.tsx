import { Overview } from "./Overview";
import { FloorOne, FloorTwo, FloorThree, FloorFour, FloorFive } from "./floors"

declare interface PageProps{
    pageName: string;
}

export function Page({pageName}: PageProps, ...props: any){

    let currentPage: JSX.Element = <></>;

    switch(pageName){
        case "overview": currentPage = <Overview/>;
        case "floorOne": currentPage = <FloorOne/>;
        case "floorTwo": currentPage = <FloorTwo/>;
        case "floorThree": currentPage = <FloorThree/>;
        case "floorFour": currentPage = <FloorFour/>;
        case "floorFive": currentPage = <FloorFive/>;
    }


    return currentPage;
}