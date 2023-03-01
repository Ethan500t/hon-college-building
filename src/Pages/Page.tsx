import { Overview } from "./Overview";
import { FloorOne, FloorTwo, FloorThree, FloorFour, FloorFive } from "./floors"

export declare interface PageProps{
    pageName?: string;
    className?: string;
}

export function Page({pageName, className}: PageProps, ...props: any){

    let currentPage: JSX.Element = <></>;

    switch(pageName){
        case "overview": currentPage = <Overview className={className}/>;
        case "floorOne": currentPage = <FloorOne className={className}/>;
        case "floorTwo": currentPage = <FloorTwo className={className}/>;
        case "floorThree": currentPage = <FloorThree className={className}/>;
        case "floorFour": currentPage = <FloorFour className={className}/>;
        case "floorFive": currentPage = <FloorFive className={className}/>;
    }
    console.log(pageName)

    return <Overview className={className}/>;
}