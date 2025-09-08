import SectionTitle from "../SectionTitle";
import aboutImage from "../../assets/home-about.png";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  buttonVariants,
  imageVariants,
  textVariants,
  titleVariants,
} from "../../animations";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px 250px 0px",
  });

  return (
    <section className="container" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionTitle title="About me" />
      </motion.div>
      <div className="bg-background-gradient py-7 lg:py-14 px-6 lg:px-24 rounded-2xl lg:rounded-[36px]">
        <div className="flex flex-col justify-center items-center gap-y-4 lg:gap-y-8">
          <div className="flex flex-col-reverse xl:flex-row gap-x-9 gap-y-6">
            {/* Text */}
            <motion.div
              className="w-full flex flex-col items-center lg:items-start justify-center gap-y-2 lg:gap-y-4 text-right"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h2 className="text-white capitalize text-2xl lg:text-[42px]">
                About me
              </h2>
              <p className="text-muted text-center lg:text-start text-base lg:text-lg leading-relaxed">
              I am Mohamed Osama Ibrahim, a Web Developer with the ability to work on Frontend, Backend, or the complete MERN Stack. I have experience in developing web applications and I am always eager to enhance my skills and build modern projects that combine creativity and efficiency.
              </p>
            </motion.div>
            <div className="flex justify-center items-center">
              <hr className="h-[1px] w-2/3 xl:h-2/3 xl:w-[1px] bg-muted rounded-2xl" />
            </div>
            {/* Image */}
            <motion.div
              className="w-full flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img
                src={aboutImage}
                loading="lazy"
                className="w-full max-w-sm lg:max-w-md"
              />
            </motion.div>
          </div>
          {/* Buttons */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between gap-y-4 gap-x-[72px] max-w-xs lg:max-w-full"
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Button className="rounded-xl lg:w-[350px] bg-btn-secondary hover:bg-btn-secondary-hover">
              <a
                href="https://drive.google.com/drive/folders/1kKprqKFYXY2d1hjM3zbgNkmQaGGsJMU9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-6 py-4 flex justify-center items-center gap-x-3 text-white text-sm xl:text-lg font-medium normal-case"
                download
              >
                <span>
                  <FaDownload className="h-5 w-5 text-white" size={20} />
                </span>
                 Download My Cv
                
              </a>
            </Button>
            <Button
              primary
              className="rounded-xl lg:w-[350px] bg-btn-primary hover:bg-btn-primary-hover"
            >
              <a
                href="https://wa.me/201152673206"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-6 py-4 flex justify-center items-center gap-x-3 text-white text-sm xl:text-lg font-medium normal-case"
              >
                <span>
                  <FaWhatsapp className="h-5 w-5 text-white" size={20} />
                </span>
                Let's Contact
                
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
