import Project, { portfolioData } from "../components/Project";

function Portfolio() {
    return(
        <div>
            <h2>Portfolio</h2>
            <Project data={portfolioData} />
        </div>
    )
}

export default Portfolio;