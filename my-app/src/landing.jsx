import { React, useState } from 'react';

const Landing = () => {
    const [ navBarOpen, setNavBarOpen ] = useState(false);

    return (
        <div class="h-screen flex flex-col bg-slate-800 text-white">
            
            <nav class="shadow-md">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        {/* <!-- Logo Section --> */}
                        <div class="flex items-center">
                            <a href="#" class="text-2xl font-bold text-fauna_green">Jack's Website</a>
                        </div>

                        {/* <!-- Navigation Links (Desktop) --> */}
                        <div class="hidden md:flex space-x-4 items-center ml-auto">
                            <a href="#" class="hover:text-blue-600">Home</a>
                            <a href="#" class="hover:text-blue-600">About</a>
                            <a href="#" class="hover:text-blue-600">Services</a>
                            <a href="#" class="hover:text-blue-600">Contact</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div class="md:hidden flex items-center">
                            <button id="mobile-menu-button" class="hover:text-blue-600 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" onClick={() => setNavBarOpen(!navBarOpen)}>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile Menu --> */}
                { navBarOpen &&
                <div id="mobile-menu" class=" bg-slate-700 shadow-md z-10">
                    <a href="#" class="block px-4 py-2 hover:text-blue-600">Home</a>
                    <a href="#" class="block px-4 py-2 hover:text-blue-600">About</a>
                    <a href="#" class="block px-4 py-2 hover:text-blue-600">Services</a>
                    <a href="#" class="block px-4 py-2 hover:text-blue-600">Contact</a>
                </div>
                }
            </nav>
            
            <div class="flex justify-center items-center text-center flex-grow">
                <h1 class="text-4xl font-bold text-white">Hello, world!</h1>
            </div>
        </div>
    );
}

export default Landing;
 