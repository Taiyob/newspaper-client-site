import { useEffect } from "react";
import addImg1 from "../../assets/images/250.jpg";
import addImg2 from "../../assets/images/ads_728.jpg";
import hcSticky from 'hc-sticky'

const CategoryNews = () => {
  useEffect(() => {
    const mySticky = function () {
      // sticky
      var stickys = document.querySelectorAll(".sticky");
      if (stickys != null) {
        for (var i = 0; i < stickys.length; i++) {
          new hcSticky(stickys[i], {
            stickTo: stickys[i].parentNode,
            top: 28,
            bottomEnd: 0,
          });
        }
      }
    };
    mySticky();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10">
      <div className="bg-gray-50 py-4 hidden">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="mx-auto table text-center text-sm">
            <a className="uppercase" href="#">
              Advertisement
            </a>
            <a href="#">
              <img src={addImg2} alt="advertisement area" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className=" mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  Europe
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1"
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1"
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1"
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1"
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1"
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1"
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="w-full bg-gray-50 h-full">
                <div className="text-sm py-6 sticky">
                  <div className="w-full text-center">
                    <a className="uppercase" href="#">
                      Advertisement
                    </a>
                    <a href="#">
                      <img
                        className="mx-auto"
                        src={addImg1}
                        alt="advertisement area"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
