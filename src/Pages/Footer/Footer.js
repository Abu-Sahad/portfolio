import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import img from '../../assets/logo.png'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="pb-10 bg-neutral-800 ">
      <div className=" footer grid lg:place-items-center place-items-start p-10">
        <div className="lg:-mt-28">
          <img className="h-[120px] w-[120px]" src={img} alt="" />
          <h1 className="text-3xl md:text-3xl text-2xl text-accent font-semibold title">MD ABU SAHAD</h1>
        </div>
        <div className="text-center ont-semibold lg:text-2xl text-xl my-5 ">

          <Link to='/allProject' className="link link-hover mr-2">Project</Link>
          <Link to='/about' className="link link-hover mr-2">About</Link>
          <Link to='/contact' className="link link-hover mr-2">Contract</Link>
          <Link to='/blog' className="link link-hover">Blog</Link>
          <Link className="lg:text-2xl text-xl text-center text-white" to={'/privacy'} >Privacy Policy</Link>
        </div>
        <div className=" flex justify-center lg:-mt-44">

          <Link to={{
            pathname: "https://github.com/Abu-Sahad"
          }} target="_blank" className="btn bt btn-link text-white font-bold">
            <AiFillGithub size={45} />

          </Link>
          <Link to={{
            pathname: "https://www.linkedin.com/in/abu-sahad-507b5a18b/"
          }} target="_blank" className="btn btn-active btn-link text-white font-bold">

            <AiFillLinkedin size={45} />

          </Link>

        </div>
      </div>
      <div className="lg:text-2xl text-xl text-center flex flex-col">
        <a>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          All CopyRights Reserved {year}
        </a>

      </div>
    </footer>
  );
};

export default Footer;
