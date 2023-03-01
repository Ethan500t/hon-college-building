import { PageProps } from "./Page";

export function Overview({pageName, className}: PageProps, ...props: any) {
    return (
        <div className={className}>
            <h1>Overview</h1>
        </div>
    );
}