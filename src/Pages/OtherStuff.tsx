import { PageProps } from "./Page";

export function OtherStuff({pageName, className}: PageProps, ...props: any) {
    return (
        <div className={className}>
            <h1>Other Stuff</h1>
        </div>
    );
}