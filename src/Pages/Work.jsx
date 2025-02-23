import { useEffect, useState } from "react";

const Work = (props) => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setWorks(data.works))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);
    return (
        <>
            <div className="tracking-wider text-inherit">
            <ul className="space-y-4">
                {works.map((job, index) => (
                    <li key={index}>
                        <h3 className="lg:text-3xl text-xl">{job.title}</h3>
                        <a href={job.company_url} target="_blank" rel="noopener noreferrer" className="lg:text-sm text-xs hover:underline">
                            {job.company}
                        </a>
                        <p className="lg:text-sm text-xs">{job.timeline}</p>
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
};

export default Work;
