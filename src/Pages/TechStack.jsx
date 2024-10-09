const TechStack = (props) => {
    return (
        <>
            <div className="tracking-wider text-inherit">
                <ul>
                    <li className="lg:text-3xl text-xl">Backend
                        <p className="lg:text-sm text-xs">Laravel, CakePHP</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">Frontend
                        <p className="lg:text-sm text-xs">JavaScript, Three.js, Angular, React, HTML5, CSS3, Tailwind, Bootstrap</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">Database Management
                        <p className="lg:text-sm text-xs">MSSQL, MySQL</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">Version Control
                        <p className="lg:text-sm text-xs">Git, Github, Bitbucket, Gitlab</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">Deployments
                        <p className="lg:text-sm text-xs">AWS, GCP</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">Others
                        <br />
                        <p className="lg:text-sm text-xs">Docker, CI/CD, Github Actions</p>
                    </li>
                    <hr />
                </ul>
            </div>
        </>
    );
};

export default TechStack;
