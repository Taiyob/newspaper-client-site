import { useEffect, useState } from "react";
import useSlider from "../../hooks/useSlider";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const { data, isLoading } = useSlider();

  useEffect(() => {
    if (data && data?.data && data?.data.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentSlider((currentSlider) =>
          currentSlider === data?.data.length - 1 ? 0 : currentSlider + 1
        );
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [currentSlider, data]);

  return (
    <>
      {isLoading || !data || !data?.data || data?.data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div
          className="w-full h-72 sm:h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
          style={{
            backgroundImage: `url(${data.data[currentSlider]?.image || ""})`,
          }}
        >
          {/* text container here */}
          <div className="drop-shadow-lg text-white text-center px-5">
            <h1 className="text-xl lg:text-3xl font-semibold mb-3">
              {data.data[currentSlider]?.title || ""}
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              {data.data[currentSlider]?.description || ""}
            </p>
          </div>
        </div>
      )}
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {data?.data.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.image}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
