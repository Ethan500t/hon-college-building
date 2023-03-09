import { PageProps } from "./Page";

export function Leed({pageName, className}: PageProps, ...props: any) {
    return (
        <div className={className}>
            <div>
            <h1>Leed Cert</h1>
            <h2>Intro to Sustainability</h2>
            <p>
            Sustainability is a major priority at USF. We strive for every building to be eco-friendly, for the health of our 
            environment and students. A sustainable building is defined as a building that maintains or improves the quality 
            of life for those using it, while preserving and incorporating the environment around it. The Judy Genshaft Honors 
            College has made a great effort to be a modern, sustainable building, maintaining the landscape around it, while 
            providing all the amenities students of USF have come to expect of our campus. For the effort taken, the Judy Genshaft 
            Honors College has been awarded the Silver Level LEED Rating.
            </p>
            </div>
            <div>
            <h2>What is LEED?</h2>
            <p>
            LEED, or Leadership in Energy and Environmental Design, is a set of standards that sets guidelines for sustainable, 
            cost-efficient, and safe buildings across the world, of all varieties, from commercial to residential. The new Judy 
            Genshaft Honors College building has been created to meet as many of these guidelines as possible, attaining a Silver 
            Ranking. Attaining such a ranking is high standard to meet, meaning that the building accounts greatly for it's impact 
            on global warming, human health, water use, biodiversity, and other similar areas. More information about the Judy Genshaft 
            Honors College's specific impacts on these areas are given below.
            </p>
            </div>
        </div>
    );
}