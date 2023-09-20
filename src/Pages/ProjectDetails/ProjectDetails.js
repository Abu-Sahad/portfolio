import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [array, setArray] = useState();
  useEffect(() => {
    fetch("../../../projects.json")
      .then((res) => res.json())
      .then((data) => {
        setArray(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }
  let arr;

  arr = array?.find((ar) => ar._id === id);

  const goToLiveSite = () => {
    <Link to={window.open(`${arr.live}`)}></Link>;
  };
  const goToClientGit = () => {
    <Link to={window.open(`${arr.client}`)}></Link>;
  };
  const goToServerGit = () => {
    <Link to={window.open(`${arr.server}`)}></Link>;
  };

  return (
    <div className="flex flex-col bg-neutral-800 lg:px-10 px-5 md:px-8 lg:flex-row items-start justify-center">
      <div className="lg:max-w-5xl lg:px-10 md:my-10 ">
        <div className="wrapper two lg:my-20 ">
          <div className="neon">
            <h3> {arr.name} </h3>
          </div>
        </div>
        <h4 className="lg:text-3xl md:text-3xl text-xl lg:my-10"> {arr.details} </h4>

        <div className="features-container lg:text-3xl md:text-3xl text-xl lg:my-10">
          <h4 className="lg:text-3xl md:text-3xl text-xl my-8 lg:my-10">
            <span className="lg:text-4xl md:text-3xl text-xl text-accent  font-bold">
              Features:
            </span>
          </h4>
          <ul className="features-list">
            {arr.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <h4 className="lg:text-3xl md:text-3xl text-xl my-8 lg:my-10">
          <span className="lg:text-4xl md:text-3xl text-xl text-accent  font-bold">
            Technology used :
          </span>{" "}
          {arr.technology}
        </h4>
        <div>
          <button
            onClick={goToLiveSite}
            className="btn btn-primary btn-sm md:btn-md lg:btn-lg m-2"
          >
            Live Site
          </button>
          <button
            onClick={goToClientGit}
            className="btn btn-accent btn-sm md:btn-md lg:btn-lg m-2"
          >
            Client Git
          </button>
          {arr.server && (
            <button
              onClick={goToServerGit}
              className="btn btn-secondary btn-sm md:btn-md lg:btn-lg m-2"
            >
              Server Git
            </button>
          )}
        </div>
      </div>
      <div>
        <img
          className=" my-8 lg:w-[80%] border border-white w-[90%] "
          src={arr.image1}
          alt=""
        />
        <img
          className=" my-8 lg:w-[80%] border border-white w-[90%] "
          src={arr.image2}
          alt=""
        />
        <img
          className=" my-8 lg:w-[80%] border border-white w-[90%] "
          src={arr.image3}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
