import React from "react";
import bgContact from "../../../assets/bg-contact.jpg";
import ContactForm from "../../../components/ContactForm";

const Contact = () => {
  return (
    <div
      className="grid place-items-center"
      style={{
        backgroundImage: `url(${bgContact})`,
        backgroundSize: "cover",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"
       
      }}
    >
      <div className="mt-10 lg:p-16 md:p-12 p-6 lg:w-[50%] ">
        <h5 className="lg:text-3xl text-2xl font-semibold ">
          I am interested in opportunities - especially ambitious or large
          projects. However, if you have other request or question i'd love if
          you reach out to me.Even if it's just to say{" "}
          <span className="text-warning">"Hey!"</span>
          .Don't hesitate!Drop me a line and i'll get back to you ASAP!.
        </h5>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
