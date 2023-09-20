import React from "react";
import '../../../components/Styles/Projects.css'
import { motion } from "framer-motion";
import useProjects from "../../../hooks/useProjects";
import Spinner from "../../../components/Spinner";
import { container } from "../../../helpers/framer-motion";
import Project from "../../../components/Project";

const AllProjects = () => {
  const [projects, isLoading] = useProjects();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="lg:px-10 pt-10 pb-20 flex flex-col justify-center items-center">
      <hr className="animate-bounce h-2 w-[100px] mx-auto mb-3 border-0 rounded-full bg-[#6f54ef]" />
      <h2 className="mb-10 text-center">MY PROJECTS</h2>
      <motion.div variants={container} whileInView="visible" initial="hidden" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:grid-cols-3 gap-14 lg:gap-10 px-1 lg:px-0">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default AllProjects;
