import reactIcon from "../../assets/tech-reactjs.png";
import html from "../../assets/html.png";
import expressjs from "../../assets/tech-express.png";
import nest from "../../assets/nest.png"
import css from "../../assets/css.png";
import javascript from "../../assets/tech-javascript.png";
import typescript from "../../assets/tech-typescript.png";
import tailwindcss from "../../assets/tech-tailwindcss.png";
import nodejs from "../../assets/tech-nodejs.png";
import postgresql from "../../assets/tech-potgresql.png";
import reactRouter from "../../assets/tech-react-router.png";
import mongodb from "../../assets/tech-mongodb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logos = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JavaScript" },
  { img: typescript, name: "TypeScript" },
  { img: tailwindcss, name: "Tailwind CSS" },
  { img: reactIcon, name: "React" },
  { img: reactRouter, name: "React Router" },
  { img: nodejs, name: "Node.js" },
  { img: expressjs, name: "Express.js" },
  { img: nest, name: "Nest.js" },
  { img: postgresql, name: "PostgreSQL" },
  { img: mongodb, name: "MongoDB" },
];

const AnimatedScrollLogo = () => {
  return (
    <div className="w-full py-4 md:py-8 lg:py-12 overflow-hidden bg-background-gradient border-t border-b border-t-dark-blue border-b-dark-blue">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={4}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          320: { slidesPerView: 4, spaceBetween: 3 },
          640: { slidesPerView: 6, spaceBetween: 6 },
          768: { slidesPerView: 6, spaceBetween: 12 },
          1024: { slidesPerView: 8, spaceBetween: 24 },
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex flex-col justify-center items-center">
            <img
              loading="lazy"
              src={logo.img}
              alt={logo.name}
              className="h-6 md:h-8 lg:h-12 object-contain"
            />
            <span className="mt-2 text-xs md:text-sm text-center text-white">{logo.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimatedScrollLogo;
