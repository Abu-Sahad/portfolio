import React from "react";
import useProjects from "../hooks/useProjects";
import Project from "./Project";
import Spinner from "./Spinner";
import './Styles/Projects.css'
import { motion } from "framer-motion";
import { container } from '../helpers/framer-motion'
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, isLoading] = useProjects();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="lg:px-10 px-5 flex flex-col justify-center items-center">
       <hr className="animate-bounce mt-10 lg:mt-20 md:mt-16  h-2 w-[100px] mx-auto mb-3 border-0 rounded-full bg-[#6f54ef]" />
      <h2 className="mb-10 lg:mb-20 md:mb-16 text-center">MY PROJECTS</h2>
      <motion.div variants={container} whileInView="visible" initial="hidden" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:grid-cols-3 gap-14 lg:gap-10 px-1 lg:px-0">
        {projects.slice(0,3).map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </motion.div>

      <Link to='/allProject' className="btn btn-primary btn-sm lg:btn-lg rounded-md accent-btn mt-5">See More</Link>
    </section>
  );
};

export default Projects;
