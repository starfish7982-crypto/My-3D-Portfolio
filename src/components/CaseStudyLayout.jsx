import React from "react";
import { Link } from "react-router-dom";
import CTA from "./CTA";
import { arrow } from "../assets/icons";

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
);

const Section = ({ title, children }) => (
  <section className="py-10 border-b border-slate-200 last:border-b-0">
    <h2 className="subhead-text mb-5">{title}</h2>
    {children}
  </section>
);

const CaseStudyLayout = ({ study, children }) => (
  <section className="max-container">
    <Link
      to="/design"
      className="inline-flex items-center gap-2 text-blue-600 font-medium mb-8 hover:underline"
    >
      <img src={arrow} alt="" className="w-4 h-4 object-contain rotate-180" />
      Back to Design
    </Link>

    <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">
      Design Case Study
    </p>
    <h1 className="head-text mt-2">
      {study.name}
      <span className="blue-gradient_text font-semibold drop-shadow">
        {" "}
        — {study.subtitle}
      </span>
    </h1>
    <p className="mt-2 text-slate-500">{study.emphasis}</p>
    <TagList tags={study.tags} />
    <p className="mt-4 text-sm text-slate-400">{study.meta}</p>

    {children}

    {study.nextStudy && (
      <div className="mt-12 p-6 rounded-xl bg-white shadow-card">
        <p className="text-slate-500 text-sm">Next case study</p>
        <Link
          to={`/design/${study.nextStudy}`}
          className="mt-2 inline-flex items-center gap-2 text-xl font-poppins font-semibold text-blue-600 hover:underline"
        >
          {study.nextStudyLabel}
          <img src={arrow} alt="" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )}

    <hr className="border-slate-200 mt-12" />
    <CTA />
  </section>
);

export { Section, TagList };
export default CaseStudyLayout;
