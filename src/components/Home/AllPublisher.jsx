import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import usePublisher from "../../hooks/usePublisher";
import "./allPublisher.css";

const AllPublisher = () => {
  const { data, isLoading } = usePublisher();

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoPlay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
        scrollbar={{ draggable: true }}
        navigation={true}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        width={400}
        height={400}
      >
        {!isLoading
          ? data?.data.map((publishers) => (
              <SwiperSlide key={publishers._id}>
                <div className="swiper-image-container">
                  <img
                    src={publishers.imageUrl}
                    alt=""
                    className="swiper-image"
                  />
                </div>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default AllPublisher;
