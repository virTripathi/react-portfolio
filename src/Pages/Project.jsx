import GuestLayout from "../Layouts/GuestLayout";

const Project = (props) => {
    return (
        <>
            <div className="tracking-wider text-inherit">
                <ul>
                    <li className="lg:text-3xl text-xl">
                        <a className="hover:underline" href="https://github.com/virTripathi/react-dashboard" target="_blank" rel="noopener noreferrer">Admin Dashboard</a>
                        <p className="text-xs lg:text-sm">React</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">
                        <a className="hover:underline" href="https://github.com/virTripathi/node_js_batch_processing" target="_blank" rel="noopener noreferrer">Batch Processor</a>
                        <p className="text-xs lg:text-sm">Angular + NodeJS + Laravel</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">
                        <a className="hover:underline" href="https://github.com/virTripathi/mini-jarvis" target="_blank" rel="noopener noreferrer">Mini Jarvis</a>
                        <p className="text-xs lg:text-sm">Laravel + React</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">
                        <a className="hover:underline" href="https://github.com/virTripathi/woocommerce_api_integration" target="_blank" rel="noopener noreferrer">Woo commerce Integration</a>
                        <p className="text-xs lg:text-sm">Laravel + Woocommerce</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">
                        <a className="hover:underline" href="https://github.com/virTripathi/laravel_cashier" target="_blank" rel="noopener noreferrer">Cashier</a>
                        <p className="text-xs lg:text-sm">Laravel + Angular + Stripe</p>
                    </li>
                    <br />
                    <li className="lg:text-3xl text-xl">Tradmed
                        <br />
                        <p className="text-xs lg:text-sm">Laravel + Angular</p>
                    </li>
                    <hr />
                </ul>
            </div>
        </>
    );
};


export default Project;
