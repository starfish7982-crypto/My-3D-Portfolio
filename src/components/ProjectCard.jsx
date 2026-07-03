import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const ProjectCard = ({
  iconUrl,
  theme,
  name,
  description,
  link,
  linkLabel,
  internal = false,
}) => (
  <div className="lg:w-[400px] w-full">
    <div className="block-container w-12 h-12">
      <div className={`btn-back rounded-xl ${theme}`} />
      <div className="btn-front rounded-xl flex justify-center items-center">
        <img src={iconUrl} alt="" className="w-1/2 h-1/2 object-contain" />
      </div>
    </div>

    <div className="mt-5 flex flex-col">
      <h4 className="text-2xl font-poppins font-semibold">{name}</h4>
      <p className="mt-2 text-slate-500">{description}</p>
      <div className="mt-5 flex items-center gap-2 font-poppins">
        {internal ? (
          <Link to={link} className="font-semibold text-blue-600">
            {linkLabel}
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            {linkLabel}
          </a>
        )}
        <img src={arrow} alt="" className="w-4 h-4 object-contain" />
      </div>
    </div>
  </div>
);

export default ProjectCard;
