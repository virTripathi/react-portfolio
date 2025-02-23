import { useEffect, useState } from "react";
import GithubIcon from "../Icons/GithubIcon";
import GmailIcon from "../Icons/GmailIcon";
import GoogleFormIcon from "../Icons/GoogleFormIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import PinkaryIcon from "../Icons/PinkaryIcon";

// Map icon names to components
const iconComponents = {
    GithubIcon,
    GmailIcon,
    GoogleFormIcon,
    InstagramIcon,
    LinkedinIcon,
    WhatsappIcon,
    PinkaryIcon
};

const Contact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("/data.json") // Fetch from `public/`
            .then((response) => response.json())
            .then((data) => setContacts(data.contacts))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    return (
        <div className="flex flex-col items-end justify-end h-full">
            <div className="mb-8">
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="hidden md:block mb-2 md:mb-4 text-xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                            Contact Me
                        </h2>
                        <p className="text-lg mb-4 md:mb-8 lg:mb-16 font-light md:text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                            Got any feedback? Let me know via email.
                        </p>
                        <form action="#" className="md:space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mb-2 md:mb-0 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="viratofficial07@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="mb-2 md:mb-0 block p-3 w-full text-xs md:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Let me know how I can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-400">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    className="mb-2 md:mb-0 block p-1 md:p-2.5 w-full text-xs md:text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Leave a comment..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-2 md:py-3 md:px-5 text-xs md:text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            <div className="flex gap-2 items-center justify-center fixed">
                {contacts.map((contact, index) => {
                    const IconComponent = iconComponents[contact.icon];
                    return (
                        <a key={index} target="_blank" rel="noreferrer" href={contact.url}>
                            {IconComponent && <IconComponent className="w-4 lg:w-6 h-4 lg:h-6" />}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Contact;
