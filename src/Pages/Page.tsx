import { Overview } from "./Overview";
import { FloorPage } from "./floors/FloorPage";
import { OtherStuff } from "./OtherStuff";
import { Leed } from "./Leed";

export declare interface PageProps{
    pageName?: string;
    className?: string;
}

export function Page({pageName, className}: PageProps, ...props: any){

    let currentPage: JSX.Element = <></>;

    switch(pageName){
        case "overview": 
            currentPage = <Overview className={className}/>;
            break;
        case "floorPage": 
            currentPage = <FloorPage/>;
            break;
        case "leed":
            currentPage = <Leed/>;
            break;
        case "otherStuff": 
            currentPage = <OtherStuff/>;
            break;

    }
    console.log(pageName)

    return currentPage;
}