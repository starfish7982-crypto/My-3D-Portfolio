import React from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../constants/caseStudies";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";

const Design = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Design<span className="blue-gradient_text font-semibold drop-shadow"> Case Studies</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Deep dives into UX process — from information architecture and wireframe fundamentals to production hardware interfaces. These case studies show how I think as a designer.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-blue-600 font-medium w-fit"
        >
          Looking for engineering projects?
          <img src={arrow} alt="" className="w-4 h-4 object-contain" />
        </Link>
      </div>

      <div className="flex flex-wrap gap-16 mt-16">
        {caseStudies.map((study) => (
          <ProjectCard
            key={study.slug}
            iconUrl={study.iconUrl}
            theme={study.theme}
            name={study.name}
            description={study.excerpt}
            link={`/design/${study.slug}`}
            linkLabel="Read case study"
            internal
          />
        ))}
      </div>

      <hr className="border-slate-200 mt-16" />
      <CTA />
    </section>
  );
};

export default Design;
