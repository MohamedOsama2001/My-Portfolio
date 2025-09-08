import heroImg from "../../assets/astro1.png";
import { FiArrowLeftCircle } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  bottomVariants,
  containerVariants,
  textVariants,
} from "../../animations";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const buttonGradientStyle = {
    background: "linear-gradient(96.53deg, #142D6C 0%, #0F1523 43.85%)",
  };

  return (
    <motion.section
      ref={ref}
      className="container mt-10 flex flex-col items-center justify-center gap-y-6 min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-78px)]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-x-16 w-full"
        variants={containerVariants}
      >
        <motion.div
          className="w-full lg:w-1/2 max-w-[500px] space-y-4"
          variants={textVariants}
        >
          <motion.h1
            className="text-center text-[#ED6867] lg:text-start font-normal  text-2xl md:text-3xl capitalize"
            variants={textVariants}
          >
            welcome all in my portifolio
          </motion.h1>
          <motion.p
            className="text-white  text-center leading-relaxed lg:text-start text-xl lg:text-2xl font-normal capitalize"
            variants={textVariants}
          >
            Hi! i'm mohamed osama,&nbsp;
            <span className="text-[#ED6867]">
              <Typewriter
                words={[
                  'frontend web developer',
                  'backend web developer',
                  'mearn stack developer',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            and passionate about building interactive web applications.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img src={heroImg} className="w-full max-w-md h-full" />
        </motion.div>
      </motion.div>
      <motion.div
        variants={bottomVariants}
        className="w-full flex flex-col items-center"
      >
        <Button
          style={buttonGradientStyle}
          className="flex items-center gap-x-2 px-4 sm:px-6 md:px-9 py-2 sm:py-3 md:py-4 text-white text-sm md:text-xl border border-muted rounded-full normal-case font-medium"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <FiArrowLeftCircle className="text-white h-4 md:h-6 w-4 md:w-6" />
          Let's Start
          
        </Button>
        <motion.div
          className="w-full flex flex-col justify-center items-center mt-6"
          variants={bottomVariants}
        >
          <SlArrowDown size={40} className="text-[#C9C9CF] arrowOne" />
          <SlArrowDown size={40} className="-mt-6 text-[#C9C9CF] arrowTwo" />
          <SlArrowDown size={40} className="-mt-6 text-[#C9C9CF] arrowThree" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
