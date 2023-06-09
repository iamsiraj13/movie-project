import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import Card from "../Card/Card";

export default function HeroSlider({ movies }) {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="h-full">
          {movies.map((movie) => (
            <>
              <SwiperSlide key={movie.id}>
                <Card movie={movie} />
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </>
  );
}
