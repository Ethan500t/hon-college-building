import { Overview } from "./Overview";
import { FloorPage } from "./floors/FloorPage";

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

    }
    console.log(pageName)

    return currentPage;
}