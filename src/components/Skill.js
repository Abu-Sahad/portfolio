import React from "react";
import reactIcon from "../assets/icon/icons8-react.svg";
import htmlIcon from "../assets/icon/icons8-html-5.svg";
import cssIcon from "../assets/icon/icons8-css3.svg";
import bootIcon from "../assets/icon/icons8-bootstrap.svg";
import tailIcon from "../assets/icon/icons8-tailwindcss.svg";
import jsIcon from "../assets/icon/javascript-1.svg";
import exIcon from "../assets/icon/icons8-express-js.svg";
import moIcon from "../assets/icon/icons8-mongodb.svg";
import './Styles/Skill.css'

const Skill = () => {
  return (
    <section className="skill-container lg:my-20 md:my-16 my-10 bg-neutral-800">
      <hr className="animate-bounce mt-10 lg:mt-20 md:mt-16  h-2 w-[100px] mx-auto mb-3 border-0 rounded-full bg-[#6f54ef]" />
      <h2 className=" lg:pb-12 md:pb-8 pb-5 text-center md:mb-16">MY SKILLS</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 pb-8 md:pb-16 lg:pb-20 grid-cols-2 xl:grid-cols-5  gap-14 lg:pl-[50px] ml-24 md:ml-40">
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={htmlIcon} alt="" />
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={cssIcon} alt="" />
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={bootIcon} alt="" />
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={tailIcon} alt="" />
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={jsIcon} alt="" />
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={reactIcon} alt="" />
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={exIcon} alt="" />
        <img className="lg:w-[150px] w-[60px] md:w-[100px] rotate " src={moIcon} alt="" />
      </div>
    </section>
  );
};

export default Skill;
