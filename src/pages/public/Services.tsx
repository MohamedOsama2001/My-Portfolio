import servicesImage from "../../assets/service.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { imageVariants, textVariants } from "../../animations";
import BgImage from "../../components/BgImage";
import ServicesList from "../../components/services/ServicesList";

const Services: React.FC = () => {
  const introRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true, amount: 0.2 });

  return (
    <>
      <BgImage />
      <div className="container pt-10 lg:pt-14">
        {/* Intro Section */}
        <motion.div
          ref={introRef}
          className="flex flex-col-reverse lg:flex-row items-center mb-10 bg-background-gradient rounded-2xl lg:rounded-3xl py-4 px-8 lg:py-4"
        >
          {/* Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            className="w-full"
          >
            <h2 className="text-3xl text-center lg:text-start font-bold mb-2 text-white">
              Services
            </h2>
            <p className="text-muted text-lg leading-relaxed text-center lg:text-start">
              I offer a comprehensive range of digital services including UI/UX design, software engineering, digital marketing, brand identity design, content production, and responsive design. I always strive to use the latest technologies to deliver innovative and effective solutions that help you build a strong digital presence and achieve your goals. My passion is turning ideas into successful projects that bring real value to my clients.
            </p>
          </motion.div>
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            className="w-full flex justify-center"
          >
            <img
              loading="lazy"
              src={servicesImage}
              alt="services"
              className="w-full h-full max-w-md"
            />
          </motion.div>
        </motion.div>
        {/* Services List */}
        <ServicesList />
      </div>
    </>
  );
};

export default Services;
