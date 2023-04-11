import { PageProps } from "./Page";
import heroImg from "../assets/heroImgCropped.png";

export function Overview({pageName, className}: PageProps, ...props: any) {
    
    return (
        <div className={{className} + "bg-black"}>
            <div className="fixed bg-hero bg-cover bg-no-repeat w-full h-screen"></div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            
            
        </div>
    );
}