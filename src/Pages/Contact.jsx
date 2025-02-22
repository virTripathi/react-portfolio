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
                <div className="mb-8">
                    <section class="">
                        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <h2 class="hidden md:block mb-2 md:mb-4 text-xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                            <p class="text-lg mb-4 md:mb-8 lg:mb-16 font-light md:text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got any feedbacks, let me know in the email.
                            </p>
                            <form action="#" class="md:space-y-8">
                                <div>
                                    <label for="email" class="block block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" id="email" class="mb-2 md:mb-0 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="viratofficial07@gmail.com" required />
                                </div>
                                <div>
                                    <label for="subject" class="block block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                    <input type="text" id="subject" class="mb-2 md:mb-0 block p-3 w-full text-xs md:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message" class="block block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" class="mb-2 md:mb-0 block p-1 md:p-2.5 w-full text-xs md:text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" class="p-2 md:py-3 md:px-5 text-xs md:text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
                            </form>
                        </div>
                    </section>
                </div>
                <div className="flex gap-2 items-center justify-center fixed">
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
                        <GmailIcon className={'w-4 lg:w-6 h-4 lg:h-6'} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfCho0U9nXHQjX83pQlXHhvV4o-UpjZR-H0csNumreXXmQMYQ/viewform?usp=sf_link">
                        <GoogleFormIcon className={'w-4 lg:w-6 h-4 lg:h-6'} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
