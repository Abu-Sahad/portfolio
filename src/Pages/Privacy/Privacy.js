import React from "react";

const Privacy = () => {
  return (
    <div className="lg:px-16 md:px-12 px-6">
      <h1 className="title text-5xl md:text-5xl text-3xl text-center text-success py-16">
        Privacy Policy
      </h1>
      <div >
        <h4 className="title lg:text-4xl md:text-4xl text-2xl font-semibold mb-8 text-secondary">Collection of Information</h4>
        <p className="lg:text-3xl md:text-3xl text-xl font-semibold">
          All the information in this website are mine .These information are not allowed to use by others 
          on any other website.
        </p>
      </div>
      <div className="my-10" >
        <h4 className="title lg:text-4xl md:text-4xl text-2xl font-semibold my-8 text-secondary">Security</h4>
        <p className="lg:text-3xl md:text-3xl text-xl font-semibold">
        We take precautions to protect your information. When you submit sensitive information via the website, 
        your information is protected both online and offline.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
