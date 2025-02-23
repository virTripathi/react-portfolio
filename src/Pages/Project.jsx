import { useEffect, useState } from "react";


const Project = (props) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);
    return (
        <>
            <div className="tracking-wider text-inherit">
            <ul>
                {projects.map((project, index) => (
                    <li key={index} className="lg:text-3xl text-xl">
                        {project.url ? (
                            <a
                                className="hover:underline"
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        ) : (
                            project.title
                        )}
                        <p className="text-xs lg:text-sm">
                            {project.technologies.join(" + ")}
                        </p>
                        <br />
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
};


export default Project;
