import React from 'react'
// use as idea for seperate page; change class to classname
const Home = () => {
  return (
    <section>
        <nav class="relative px-6 py-6 flex justify-between items-center bg-gray-900">
            <a class="text-white text-3xl font-bold leading-none" href="#">
                <img class="" src="atis-assets/logo/atis/atis-mono-white.svg" alt="" width="auto" data-removed="true">
            </a>
            <div class="lg:hidden">
                <button class="navbar-burger flex items-center text-white p-3">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
            </button>
            </div>
            <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                <li><a class="text-sm text-gray-300 hover:text-white" href="#">Start</a></li>
                <li class="text-gray-800">
                    <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
                </li>
                <li><a class="text-sm text-white font-bold" href="#">About Us</a></li>
                <li class="text-gray-800">
                    <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
                </li>
                <li><a class="text-sm text-gray-300 hover:text-white" href="#">Services</a></li>
                <li class="text-gray-800">
                    <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
                </li>
                <li><a class="text-sm text-gray-300 hover:text-white" href="#">Platform</a></li>
                <li class="text-gray-800">
                    <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
                </li>
                <li><a class="text-sm text-gray-300 hover:text-white" href="#">Testimonials</a></li>
            </ul>
            <a class="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-green-600 font-bold rounded-l-xl rounded-t-xl transition duration-200" href="#">Contact Us</a>
        </nav>
    </section>
    )
}


export const body = () => {
  return (
    <div class="bg-gray-900 pt-12 lg:pt-20 pb-12 md:pb-24">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                    <div class="w-full text-center lg:text-left">
                        <div class="max-w-md mx-auto lg:mx-0">
                            <h2 class="mb-3 text-4xl lg:text-5xl text-white font-bold">
                                <span>Dionysus Era</span>
                                <span class="text-green-600">Dev &amp; Design</span>
                            </h2>
                        </div>
                        <div class="max-w-sm mx-auto lg:mx-0">
                            <p class="mb-6 text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                            <div><a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a><a class="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
                                    href="#">How it works</a></div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 px-4 flex items-center justify-center">
                    <div class="relative" style="z-index: 0;">
                        <img class="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                            alt="">
                        <img class="hidden md:block absolute" style="top:-2rem; right: 3rem; z-index: -1;" src="atis-assets/elements/green-dark-up.svg" alt="">
                        <img class="hidden md:block absolute" style="bottom:-2rem; right: -2rem; z-index: -1;" src="atis-assets/elements/wing-green-down.svg" alt="">
                        <img class="hidden md:block absolute" style="top:3rem; right: -3rem; z-index: -1;" src="atis-assets/elements/bullets-dark-right.svg" alt="">
                        <img class="hidden md:block absolute" style="bottom:2.5rem; left: -4.5rem; z-index: -1;" src="atis-assets/elements/bullets-dark-left.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    };

const Navi = () => {
return (
    <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
                <a class="mr-auto text-3xl font-bold leading-none" href="#">
                    <img class="h-10" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto">
                </a>
                <button class="navbar-close">
            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
            </div>
            <div>
                <ul>
                    <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Start</a></li>
                    <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">About Us</a></li>
                    <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Services</a></li>
                    <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Platform</a></li>
                    <li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded" href="#">Testimonials</a></li>
                </ul>
            </div>
            <div class="mt-auto">
                <div class="pt-6"><a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl" href="#">Sign In</a><a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                        href="#">Sign Up</a></div>
                <p class="my-4 text-xs text-center text-gray-400">
                    <span>© 2020 All rights reserved.</span>
                </p>
                <div class="text-center">
                    <a class="inline-block px-1" href="#">
                        <img src="atis-assets/social/facebook.svg" alt="">
                    </a>
                    <a class="inline-block px-1" href="#">
                        <img src="atis-assets/social/twitter.svg" alt="">
                    </a>
                    <a class="inline-block px-1" href="#">
                        <img src="atis-assets/social/instagram.svg" alt="">
                    </a>
                </div>
            </div>
        </nav>
    </div>
    )
}
