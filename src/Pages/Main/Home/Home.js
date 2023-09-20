import React from "react";
import Projects from "../../../components/Projects";
import Skill from "../../../components/Skill";
import Banner from "../../../components/Banner";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Projects />
      <Skill />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
