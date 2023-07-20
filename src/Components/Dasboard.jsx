import React from "react";
import { Link } from "react-router-dom";

const Dasboard = () => {
  const userData = JSON.parse(localStorage.getItem("registerData"));
  function inputEvent() {
    console.log();
  }
  return (
    <div className="">
      <header className="p-4 ">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-8 h-8 "
              >
                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
              </svg>
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/home"
                  className="flex items-center px-4 -mb-1 border-b-2 text-red-400 "
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  className="flex items-center px-4 -mb-1 border-b-2 text-red-400 "
                >
                  Blog
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/contect"
                  className="flex items-center px-4 -mb-1 border-b-2 text-red-400 "
                >
                  Contect
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  to="/allproduct"
                  className="flex items-center px-4 -mb-1 border-b-2 text-red-400 "
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link
              to="/"
              onClick={() => localStorage.removeItem("token")}
              className="px-8 py-3 font-semibold rounded bg-blue-300"
            >
              Log out
            </Link>
          </div>
        </div>
      </header>


{/* Home */}

<section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Ac mattis
              <span className="">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded "
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded "
              >
                Malesuada
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>




	  {/* Blog */}


	  <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">From the blog</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline  ">
                        How to use sticky note for problem solving
                    </a>
                    
                    <span className="text-sm text-gray-500 ">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline  ">
                        How to use sticky note for problem solving
                    </a>

                    <span className="text-sm text-gray-500 ">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline  ">
                        Morning routine to boost your mood
                    </a>

                    <span className="text-sm text-gray-500 ">On: 25 November 2020</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline  ">
                        All the features you want to know
                    </a>

                    <span className="text-sm text-gray-500">On: 30 September 2020</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline ">
                        Minimal workspace for your inspirations
                    </a>

                    <span className="text-sm text-gray-500 ">On: 13 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline  ">
                        What do you want to know about Blockchane
                    </a>
                    
                    <span className="text-sm text-gray-500 ">On: 20 October 2019</span>
                </div>
            </div>
        </div>
    </div>
</section>


{/* Contect */}

<section className="bg-white ">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-500 ">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
              Get in touch
            </h1>

            <p className="mt-3 text-gray-500 ">
              Our friendly team would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 ">hello@merakiui.com</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-blue-500 ">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-blue-500 ">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                frame-border="0"
                title="map"
                margin-height="0"
                margin-width="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>


	  {/* footer */}


	  <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Button
              </button>
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" />
                waistcoat green juice
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @knyttneve
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Enamel pin tousled raclette tacos irony
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Dasboard;
