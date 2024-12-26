import Project, { portfolioData } from "../components/Project";

function Portfolio() {
    return(
        <div>
            <h2>Portfolio page</h2>
            <Project data={portfolioData} />
        </div>
    )
}

export default Portfolio;