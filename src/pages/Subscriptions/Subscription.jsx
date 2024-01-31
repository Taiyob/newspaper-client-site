import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Subscription = () => {
  const [selectFeature, setSelectFeature] = useState("");
  const featurePrice = {
    1: [10, 24, 72],
    5: [30, 55, 80],
    10: [50, 100, 150],
  };
  const handleFeature = (e) => {
    setSelectFeature(e.target.value);
  };
  const isFeatured = selectFeature !== "";
  const planContent = [
    {
      title: "Beginner",
      description: "Etiam ac convallis enim, eget euismod dolor.",
      features: ["Aenean quis", "Morbi semper", "Tristique enim nec"],
    },
    {
      title: "Pro",
      description: "Morbi cursus ut sapien sit amet consectetur.",
      features: [
        "Everything in Free",
        "Phasellus tellus",
        "Praesent faucibus",
        "Aenean et lectus blandit",
      ],
    },
    {
      title: "Team",
      description: "Phasellus ultrices bibendum nibh in vehicula.",
      features: [
        "Everything in Pro",
        "Fusce sem ligula",
        "Curabitur dictum",
        "Duis odio eros",
        "Vivamus ut lectus ex",
      ],
    },
  ];

  const handleSubscribeClick = (price) => {
    console.log("Selected Price:", price);
  };

  return (
    <div className="mt-20">
      <Helmet>
        <title>Subscription</title>
      </Helmet>
      <form>
        <div className="p-6 py-12 bg-violet-400 text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracki font-bold">
                Up to
                <br className="sm:hidden" />
                50% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>If you are first time in here,</span>
                <span className="font-bold text-lg">
                  This offer only for you
                </span>
              </div>
              <select
                id="features"
                name="features"
                onChange={handleFeature}
                value={selectFeature}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="" disabled selected>
                  Select features
                </option>
                <option value="1">1 minutes</option>
                <option value="5">5 Days</option>
                <option value="10">10 Days</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-10 mb-10">
        <div className="flex flex-wrap items-stretch -mx-4">
          {[1, 2, 3].map((index) => {
            const price = featurePrice[selectFeature]?.[index - 1];
            console.log(typeof price);
            return (
              <Link
                to={`/subscription/payment/${price}`}
                key={index}
                className={`flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 ${
                  !isFeatured ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow-lg sm:p-8 dark:bg-gray-900">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">
                      {planContent[index - 1].title}
                    </h4>
                    {isFeatured ? (
                      <span className="text-6xl font-bold">${price}</span>
                    ) : (
                      <span>Select a feature</span>
                    )}
                  </div>
                  <p className="mt-3 leadi dark:text-gray-400">
                    {planContent[index - 1].description}
                  </p>
                  <ul className="flex-1 mb-6 dark:text-gray-400">
                    {planContent[index - 1].features.map(
                      (feature, featureIndex) => (
                        <li key={featureIndex} className="flex mb-2 space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                  {isFeatured ? (
                    <button
                      type="button"
                      className="inline-block px-5 py-3 bg-[#e5e7eb] font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900"
                      onClick={() => handleSubscribeClick(price)}
                    >
                      Subscribe
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-block disabled px-5 py-3 bg-[#e5e7eb] font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900"
                    >
                      Select feature
                    </button>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
