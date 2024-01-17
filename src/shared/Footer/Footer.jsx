import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="bg-black text-gray-400">
        <div
          id="footer-content"
          className="relative pt-8 xl:pt-16 pb-6 xl:pb-12"
        >
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
            <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
              <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
                <div className="flex items-center mb-2">
                  <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">
                    TailNews
                  </span>
                  {/* <img src="src/img-min/logo.png" alt="LOGO" /> */}
                </div>
                <p>We build great newspapper, magazine and news portal.</p>
                <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://facebook.com"
                      title="Facebook"
                    >
                      <FaFacebookSquare className="w-8 h-8" />
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://twitter.com"
                      title="Twitter"
                    >
                      <SlSocialTwitter className="w-8 h-8" />
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://youtube.com"
                      title="Youtube"
                    >
                      <FiYoutube className="w-8 h-8" />
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://instagram.com"
                      title="Instagram"
                    >
                      <FaInstagram className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                <div className="flex flex-wrap flex-row">
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                      Product
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#">Landing</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Pages</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Sections</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Sign Up</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Login</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                      Support
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#">Documentation</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Changelog</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Tools</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Icons</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                      Includes
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#">Utilities</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Components</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Example code</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Updates</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                      Legal
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Terms of Use</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">License</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">GDPR</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-dark">
          <div className="py-4 border-t border-gray-200 border-opacity-10 flex flex-col items-center justify-center">
            <div className="w-full justify-center">
              <div className="col-12 col-md text-center">
                <p className="d-block my-3">
                  Copyright © Your Company | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <button
        onClick={scrollToTop}
        className={`back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 ${
          isVisible ? "block" : "hidden"
        }`}
        aria-label="Scroll To Top"
      >
        <svg
          width="1rem"
          height="1rem"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Footer;
