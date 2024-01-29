import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuStyles = `side-menu flex flex-col right-0 w-64 fixed top-0 bg-white dark:bg-gray-800 h-full overflow-auto z-40 ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`;

  const overlayStyles = `back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0 ${
    isMobileMenuOpen ? "visible" : "invisible"
  }`;

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex justify-between">
              <NavLink
                to="/"
                className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center"
              >
                Tailnews
              </NavLink>

              <div className="flex flex-row">
                <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink
                      to="/"
                      className="block py-3 px-6 border-b-2 border-transparent"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink
                      to="/add-articles"
                      className="block py-3 px-6 border-b-2 border-transparent"
                    >
                      Add Articles
                    </NavLink>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink
                      to="/all-articles"
                      className="block py-3 px-6 border-b-2 border-transparent"
                    >
                      All Articles
                    </NavLink>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink
                      to="/subscription"
                      className="block py-3 px-6 border-b-2 border-transparent"
                    >
                      Subscription
                    </NavLink>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink
                      to="/dashboard"
                      className="block py-3 px-6 border-b-2 border-transparent"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink
                      to="/my-article"
                      className="block py-3 px-6 border-b-2 border-transparent"
                    >
                      My Articles
                    </NavLink>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink
                      to="/premium-articles"
                      className="block py-3 px-6 border-b-2 border-transparent"
                    >
                      Premium Articles
                    </NavLink>
                  </li>
                  {user?.email && (
                    <li className="relative border-l border-gray-800 hover:bg-gray-900">
                      <NavLink
                        onClick={() => logOut()}
                        className="block py-3 px-6 border-b-2 border-transparent"
                      >
                        Logout
                      </NavLink>
                    </li>
                  )}
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <NavLink className="block py-3 px-6 border-b-2 border-transparent">
                      <div className="relative flex-shrink-0">
                        <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                        <img
                          src="https://source.unsplash.com/50x50/?portrait"
                          alt=""
                          className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                        />
                      </div>
                    </NavLink>
                  </li>
                </ul>

                <div className="flex flex-row items-center text-gray-300">
                  <div className="relative hover:bg-gray-800 block lg:hidden">
                    <button
                      type="button"
                      className="menu-mobile block py-3 px-6 border-b-2 border-transparent"
                      onClick={toggleMobileMenu}
                    >
                      <span className="sr-only">Mobile menu</span>
                      <svg
                        className="inline-block h-6 w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>{" "}
                      Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* This is my mobile area */}

      <div
        className={`side-area fixed w-full h-full inset-0 z-50 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className={overlayStyles} onClick={toggleMobileMenu}>
          <div className="cursor-pointer text-white absolute right-64 p-2">
            <svg
              className="bi bi-x"
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <nav className={mobileMenuStyles}>
          <div className="mb-auto">
            <nav className="relative flex flex-wrap">
              <div className="text-center py-4 w-full font-bold border-b border-gray-100">
                TAILNEWS
              </div>
              <ul id="side-menu" className="w-full float-none flex flex-col">
                <li className="relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    Home
                  </NavLink>
                </li>

                <li className="dropdown relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    Add Articles
                  </NavLink>
                </li>

                <li className="relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    All Articles
                  </NavLink>
                </li>

                <li className="relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    Subscription
                  </NavLink>
                </li>

                <li className="relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    Dashboard
                  </NavLink>
                </li>

                <li className="relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    My Articles
                  </NavLink>
                </li>

                <li className="relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    Premium Articles
                  </NavLink>
                </li>

                <li className="relative">
                  <NavLink className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                    More
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
