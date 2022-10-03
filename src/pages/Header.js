import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 w-full border-b-2 mb-3 pt-2 pb-3">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex items-center">
                            <span className="self-center text-medium font-semibold whitespace-nowrap">Hide in the Garbage Admin</span>
                        </div>
                        <ul className="flex flex-col ml-5 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 focus:text-blue-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:underline no-underline" aria-current="page">
                                    Attributes
                                </Link>
                            </li>
                            <li>
                                <Link to="/compose" className="block py-2 pr-4 pl-3 focus:text-blue-500 text-gray-800 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:underline  no-underline" aria-current="page">
                                    Compose
                                </Link>
                            </li>
                            <li>
                                <Link to="/generated" className="block py-2 pr-4 pl-3 focus:text-blue-500 text-gray-800 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:underline  no-underline" aria-current="page">
                                    Generated
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <button className="text-gray-800 hover:bg-gray-300 bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Connect Wallet</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;