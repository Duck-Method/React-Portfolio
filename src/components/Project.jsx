const portfolioData =[
    {
        title: "Server API Weather Dashboard",
        image: "./images/WeatherDashboard.JPG",
        linkDeployed: " https://serverapi-weatherdashboard.onrender.com",
        linkGitHub: "https://github.com/Duck-Method/ServerAPI-WeatherDashboard"
    },
    {
        title: "SQL Employee Tracker",
        image: "./images/SQLEmployeeTracker.JPG",
        linkDeployed: "https://drive.google.com/file/d/1lbasEq7Z3hivp9HzIoK-Rwsy9C4eId8L/view?usp=sharing",
        linkGitHub: "https://github.com/Duck-Method/SQL-Employee-Tracker"
    },
    // {
    //     title: "Test 3",
    //     image:
    //     linkDeployed:
    //     linkGitHub:
    // },
    // {
    //     title: "Test 4",
    //     image:
    //     linkDeployed:
    //     linkGitHub:
    // },
]

function Card({title, image, linkDeployed, linkGitHub}) {
    return (
        <div class="card">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <a href={linkDeployed}>Deployed Live</a>
            <a href={linkGitHub}>GitHub Repository</a>
        </div>
    )
}

function Project({data}) {
    return (
        <div>
           {data.map((item, index) => (
                <Card 
                    key={index} 
                    title={item.title} 
                    image={item.image} 
                    linkDeployed={item.linkDeployed} 
                    linkGitHub={item.linkGitHub}
                />
            ))}
        </div>
    );
}
export {portfolioData};
export default Project;