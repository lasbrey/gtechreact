// import { a } from "react-router-dom";
// import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import logo from "../../img/logo.png";

function Navbar() {
  // const navigation = ["About", "Contact"];

  return (
    <div className="w-full text-white">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <a
                  href="/"
                  className=" flex items-center space-x-2 text-2xl font-medium"
                >
                  {/* logo */}
                  <span className=" text-white px-2 rounded-md">
                    <img src={logo} alt="gtech logo"/>
                  </span>
                  {/* <span>GTECH GLOBAL INTEGRATED</span> */}
                </a>

                {/* <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none "
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button> */}

                {/* <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, i) => (
                      <a
                        key={i}
                        href="/"
                        className="w-full px-4 py-2 -ml-4 text-white rounded-md hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none "
                      >
                        {item}
                      </a>
                    ))}
                    <a
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 rounded-md lg:ml-5"
                    >
                      Get Started
                    </a>
                  </>
                </Disclosure.Panel> */}
              </div>
            </>
          )}
        </Disclosure>

        {/* <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-white no-underline rounded-md hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
