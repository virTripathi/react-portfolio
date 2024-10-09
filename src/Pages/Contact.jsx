import GithubIcon from "../Icons/GithubIcon";
import GmailIcon from "../Icons/GmailIcon";
import GoogleFormIcon from "../Icons/GoogleFormIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import PinkaryIcon from "../Icons/PinkaryIcon";

const Contact = (props) => {
    return (
        <>   
            <div className="flex flex-col items-end justify-end h-full">
                <div className="flex gap-2 items-center justify-center">
                    <a target="_blank" rel="noreferrer" href="https://github.com/virTripathi">
                        <GithubIcon className={'w-4 lg:w-6 h-4 lg:h-6'} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vir_tripathi/">
                        <InstagramIcon className={'w-4 lg:w-6 h-4 lg:h-6'} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/virat-tripathi-584b67222/">
                        <LinkedinIcon className={'w-4 lg:w-6 h-4 lg:h-6'} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://wa.me/+919695397301">
                        <WhatsappIcon className={'w-4 lg:w-6 h-4 lg:h-6'} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://pinkary.com/@virat">
                        <PinkaryIcon className={'w-4 lg:w-6 h-4 lg:h-6'} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="mailto:viratofficial07@gmail.com">
                        <GmailIcon className={'w-4 lg:w-6 h-4 lg:h-6'}/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfCho0U9nXHQjX83pQlXHhvV4o-UpjZR-H0csNumreXXmQMYQ/viewform?usp=sf_link">
                        <GoogleFormIcon className={'w-4 lg:w-6 h-4 lg:h-6'}/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
