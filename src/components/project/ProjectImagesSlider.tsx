import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { cardVariants } from "../../animations";
import { useRef, useState } from "react";

interface IProps {
  images: string[];
}
const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    ref.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transformOrigin = "center center";
  };

  return (
    <motion.img
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.3, ease: "circOut" }}
      loading="lazy"
      src={src}
      alt={alt}
      className="max-w-full max-h-[550px] object-contain w-full h-full cursor-zoom-in"
    />
  );
};

const ProjectImagesSlider = ({ images }: IProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
    null
  );

  const handleMouseEnter = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        className="bg-background-gradient rounded-2xl lg:rounded-3xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative group">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".custom-next-button",
              nextEl: ".custom-prev-button",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="relative [&>.swiper-wrapper]:items-center"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="overflow-hidden">
                <ZoomableImage
                  src={image}
                  alt={`عرض المشروع ${index + 1}`}
                />
              </SwiperSlide>
            ))}
            {/* Custom Navigation Arrows */}
            <div
              className="custom-prev-button absolute top-1/2 right-4 z-10 transform -translate-y-1/2
                opacity-0 group-hover:opacity-100 transition-all duration-300 
                bg-white/20 hover:bg-white/40 rounded-full p-2 
                shadow-md hover:shadow-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 lg:w-8 h-4 lg:h-8 text-white transition-transform duration-200 hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>

            <div
              className="custom-next-button absolute top-1/2 left-4 z-10 transform -translate-y-1/2 
                opacity-0 group-hover:opacity-100 transition-all duration-300 
                bg-white/20 hover:bg-white/40 rounded-full p-2 
                shadow-md hover:shadow-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 lg:w-8 h-4 lg:h-8 text-muted transition-transform duration-200 hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </Swiper>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectImagesSlider;
