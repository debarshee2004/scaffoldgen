import React from 'react';
import logo from '../Images/carousel/logo.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <footer class="bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <Link href="https://flowbite.com/" class="flex items-center">
                                <img src={logo} class="h-10 w-10 rounded-full me-3" alt="QuantumQuill Logo" />
                                <span class="self-center text-2xl font-bold whitespace-nowrap text-white">QuantumQuill</span>
                            </Link>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold ppercase text-white">Pages</h2>
                                <ul class="text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link href="/" class="hover:underline">Home</Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link href="/blogs" class="hover:underline">Posts</Link>
                                    </li>
                                    <li>
                                        <Link href="/myblogs" class="hover:underline">My Posts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
                                <ul class="text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://github.com/ritesh2004" class="hover:underline ">Github</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="https://www.linkedin.com/in/ritesh-pramanik-8ba316260/" class="hover:underline">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/itzriteshpramanik/" class="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                                <ul class= "text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="/" class="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/" class="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm sm:text-center text-gray-400">© {year} <a href="/" class="hover:underline">QuantumQuill™</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/itzriteshpramanik" class="text-gray-500 hover:text-white">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                            <a href="https://www.linkedin.com/in/ritesh-pramanik-8ba316260/" class="hover:text-white ms-5">
                                <svg className='h-4 w-4' viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#758CA3"></path></g></svg>
                                <span class="sr-only">LinkedIn page</span>
                            </a>
                            <a href="https://github.com/ritesh2004" class="text-gray-500 hover:text-white ms-5">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">GitHub account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
