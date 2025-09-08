import { motion } from "framer-motion";
import { CgArrowTopRightO } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IProject } from "../../interfaces";
//import ProjectDevelopers from "./ProjectDevelopers";
import ProjectRating from "./ProjectRating";
import { cardVariants } from "../../animations";
import Skills from "../shared/Skills";
interface IProps {
  projectDetails: IProject;
}
const ProjectDetails = ({ projectDetails }: IProps) => {
  const handleGitHubClick = () => {
    if (projectDetails.isPrivate) {
      alert("This project is private please contact me for more details.");
    } else {
      window.open(projectDetails.githubUrl, "_blank");
    }
  };

  return (
    <>
      {/* Title and Link */}
      <motion.div
        variants={cardVariants}
        className="py-6 px-4 lg:px-4 mt-6 lg:mt-9 space-y-4 bg-background-gradient rounded-2xl lg:rounded-3xl"
      >
        <motion.div
          variants={cardVariants}
          className="flex items-center flex-col lg:flex-row gap-x-9 gap-y-4"
        >
          <h1 className="text-center lg:text-right text-xl md:text-[28px] lg:text-4xl font-medium text-white">
            {projectDetails.title}
          </h1>
          <div className="flex items-center gap-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={projectDetails.url}
                target="_blank"
                className="text-lg lg:text-xl text-yellow flex items-center gap-x-2 px-2 min-w-48 justify-center"
              >
                <span>
                  <CgArrowTopRightO className="h-5 w-5 text-yellow" size={20} />
                </span>
                Preview
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleGitHubClick}
              className="cursor-pointer"
              title={projectDetails.isPrivate ? "Project is Private" : "View Source Code"}
            >
              <FaGithub className="h-7 w-7 text-white hover:text-gray-300 transition-colors" />
            </motion.div>
          </div>
        </motion.div>
        {/* Rating */}
        <ProjectRating rating={projectDetails.rating} />
        {/* Description */}
        <motion.p
          variants={cardVariants}
          className="text-center lg:text-left text-muted leading-relaxed lg:text-lg"
        >
          {projectDetails.description}
        </motion.p>
        {/* Technologies */}
        <Skills skills={projectDetails.technologies} />
        {/* Developers */}
        
      </motion.div>
    </>
  );
};

export default ProjectDetails;
