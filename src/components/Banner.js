import React from 'react';
import './Styles/Banner.css'
import bg from "../assets/bg.png";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import resume from '../assets/Abu Sahad_CV.pdf'

const Banner = () => {
  return (
    <section
      className="flex items-center justify-center max-w-10xl bg-cover 
        text-center bg-no-repeat bg-center h-[60vh] md:h-[60vh] lg:h-[90vh] max-w-10xl"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid place-items-center">
        <h1 className="animate-character ">
          Hello , I'm MD ABU SAHAD
        </h1>
        <p className="lg:text-2xl text-lg text-info font-semibold  mt-2">
          MARN Stack Web Developer
        </p>
        <p className="lg:text-3xl text-lg md:text-xl font-semibold  mt-8">
          Welcome to my portfolio.
        </p>
        <p className="lg:text-3xl text-md md:text-xl mt-2 font-semibold text-white">
          Want to learn more about me? Visit my
          <Link to={{
            pathname: "https://github.com/Abu-Sahad"
          }} target="_blank" className="btn btn-active btn-link text-success font-bold">
            <span className="mr-2 text-lg">GitHub</span>
            <AiFillGithub size={25} />
          </Link>
        </p>
        <div className="flex flex-col lg:flex-row md:flex-row lg:mt-10 md:mt-8 mt-5  ">
          <Link to={resume} target="_blank" download >
            <button className="btn lg:text-lg text-xs md:text-md btn-primary m-2">
              Download CV
            </button>
          </Link>
          <Link to={'/contact'} className="btn lg:text-lg text-xs md:text-md btn-accent  m-2">
            <button>
              CONTACT ME
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;