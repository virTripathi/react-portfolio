import { useEffect, useState } from "react";

const TechStack = () => {
    const [techStack, setTechStack] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setTechStack(data.tech_stack))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    return (
        <div className="tracking-wider text-inherit">
            <ul>
                {techStack.map((stack, index) => (
                    <li key={index} className="lg:text-3xl text-xl">
                        {stack.title}
                        <p className="lg:text-sm text-xs">{stack.technologies.join(", ")}</p>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechStack;
