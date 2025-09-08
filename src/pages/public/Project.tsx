import BgImage from "../../components/BgImage";
//import avatar from "../../assets/about-avatar.png";
import { motion } from "framer-motion";
import ProjectDetails from "../../components/project/ProjectDetails";
import { IProject } from "../../interfaces";
import ProjectImagesSlider from "../../components/project/ProjectImagesSlider";
import { containerVariants } from "../../animations";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../constant";

const Project = () => {
  const {id}=useParams();
  const projectDetails: IProject = PROJECTS.find((project)=>project.id===Number(id))!;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      <BgImage />
      <div className="container mt-9">
        <ProjectImagesSlider images={projectDetails.images} />
        {/* Project Details */}
        <ProjectDetails projectDetails={projectDetails} />
      </div>
    </motion.div>
  );
};

export default Project;
