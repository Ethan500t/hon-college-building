import { PageProps } from "./Page";

export function Leed({pageName, className}: PageProps, ...props: any) {
    return (
        <div className={className}>
            <h1>Leed Cert</h1>
        </div>
    );
}