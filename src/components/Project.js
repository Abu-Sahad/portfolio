import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './Styles/Project.css'
import {item} from '../helpers/framer-motion'


const Project = ({ project }) => {
  const {name,image1 , client , live,server,_id,features} = project
  console.log(features)
  const navigate = useNavigate()

  const goToLiveSite =() =>{
    <Link to={window.open(`${live}`)}></Link>
  }
  const goToClientGit =() =>{
    <Link to={window.open(`${client}`)}></Link>
  }
  const goToServerGit =() =>{
    <Link to={window.open(`${server}`)}></Link>
  }
  const handleDetails =() =>{
   navigate(`details/${_id}`)
  }
  return (
    <motion.div variants={item}  className="card box rounded max-w-xs lg:max-w-md bg-[#0D0D0D] shadow-xl place-items-center grid ">
      
        <img className="h-52 w-auto" src={image1} alt="" />
        <h1 className="lg:text-4xl text-3xl font-bold mt-10 mb-4 pl-3 pr-3">{name} </h1>
        <div className="flex justify-center ">
        
        <button onClick={goToLiveSite} className="btn btn-primary btn-xs lg:btn-sm mr-2">Live Site</button>
        <button onClick={goToClientGit} className="btn btn-accent btn-xs lg:btn-sm ml-2">Client Git</button>
        {
          server && <button onClick={goToServerGit} className="btn btn-secondary btn-xs lg:btn-sm ml-2">Server Git</button>
        }
        </div> 
        <button onClick={handleDetails}  className="btn btn-outline w-[65%] font-bold rounded lg:text-lg text-xs md:text-md lg:my-8 my-6">Project Details</button>
      
    </motion.div>
  );
};

export default Project;
