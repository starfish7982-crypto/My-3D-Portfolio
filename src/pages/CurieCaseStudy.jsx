import React from "react";
import CaseStudyLayout, { Section } from "../components/CaseStudyLayout";
import { getCaseStudyBySlug } from "../constants/caseStudies";
import { arrow } from "../assets/icons";

const CurieCaseStudy = () => {
  const study = getCaseStudyBySlug("curie");

  return (
    <CaseStudyLayout study={study}>
      <Section title="Overview">
        <p className="text-slate-500 leading-relaxed">{study.overview}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-4 rounded-xl bg-white shadow-card"
            >
              <p className="text-2xl font-poppins font-bold blue-gradient_text">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The Challenge">
        <ul className="list-disc ml-5 space-y-2 text-slate-500">
          {study.challenge.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="My Role">
        <p className="text-slate-500">{study.role}</p>
      </Section>

      <Section title={study.deviceConstraint.title}>
        <p className="text-slate-500 mb-8 leading-relaxed">
          {study.deviceConstraint.description}
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {study.deviceConstraint.images.map((item) => (
            <div key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl border border-slate-200 shadow-card"
                loading="lazy"
              />
              <h3 className="mt-3 font-poppins font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
        <h3 className="font-poppins font-semibold mb-4">Typography at Device Scale</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {study.deviceConstraint.typography.map((item) => (
            <div key={item.title} className="p-4 rounded-xl bg-slate-50">
              <p className="text-sm font-medium text-slate-600 mb-3">{item.title}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg border border-slate-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Design ↔ Engineering Balance">
        <p className="text-slate-500 mb-6">
          Good hardware UI isn't just beautiful — every screen maps to a system state engineers can implement and test.
        </p>
        <div className="flex flex-col gap-4">
          {study.designEngineering.map((row, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4 p-5 rounded-xl bg-white shadow-card"
            >
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase mb-1">
                  Design
                </p>
                <p className="text-sm text-slate-600">{row.design}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-green-600 uppercase mb-1">
                  Engineering
                </p>
                <p className="text-sm text-slate-600">{row.engineering}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Process">
        <div className="flex flex-col gap-8">
          {study.process.map((step, index) => (
            <div key={step.title}>
              <p className="text-sm font-semibold text-blue-600 mb-1">
                Step {index + 1}
              </p>
              <h3 className="text-lg font-poppins font-semibold">{step.title}</h3>
              <p className="mt-2 text-slate-500">{step.description}</p>
              {step.image && (
                <img
                  src={step.image}
                  alt={step.imageAlt || step.title}
                  className="mt-4 w-full rounded-xl border border-slate-200 shadow-card"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Production UI on Device">
        <p className="text-slate-500 mb-6">
          These are the native-resolution UI assets designed for the embedded touchscreen — not desktop mockups.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {study.productionUI.map((screen) => (
            <div key={screen.title} className="text-center">
              <div className="inline-block p-3 rounded-xl bg-slate-800">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="max-w-[160px] w-full mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 font-poppins font-semibold text-sm">{screen.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{screen.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="UX Flow Diagrams">
        <p className="text-slate-500 mb-6">
          Full-resolution design documentation mapping every screen state and transition.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {study.gallery.map((screen) => (
            <div key={screen.title}>
              <img
                src={screen.image}
                alt={screen.title}
                className="w-full rounded-xl border border-slate-200 shadow-card"
                loading="lazy"
              />
              <h3 className="mt-3 font-poppins font-semibold">{screen.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{screen.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={study.productSpec.title}>
        <p className="text-slate-500 mb-6">{study.productSpec.description}</p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img
            src={study.productSpec.productImage}
            alt={study.productSpec.productImageAlt}
            className="w-full max-w-md rounded-xl border border-slate-200 shadow-card"
            loading="lazy"
          />
          <div className="flex flex-col gap-3">
            {study.productSpec.documents.map((doc) => (
              <a
                key={doc.label}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-4 rounded-xl bg-white shadow-card font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {doc.label}
                <img src={arrow} alt="" className="w-4 h-4 object-contain" />
              </a>
            ))}
            <a
              href={study.productSpec.projectFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-4 rounded-xl bg-white shadow-card font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Full CURIE Project Folder
              <img src={arrow} alt="" className="w-4 h-4 object-contain" />
            </a>
          </div>
        </div>
      </Section>

      <Section title="Reflection">
        <p className="text-slate-500 italic leading-relaxed">{study.reflection}</p>
      </Section>

      <Section title="Resources">
        <div className="flex flex-col gap-3">
          <a
            href={study.githubUI}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 w-fit"
          >
            Production UI assets on GitHub
            <img src={arrow} alt="" className="w-4 h-4 object-contain" />
          </a>
          <a
            href={study.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 w-fit"
          >
            UX flow diagrams on GitHub
            <img src={arrow} alt="" className="w-4 h-4 object-contain" />
          </a>
        </div>
      </Section>
    </CaseStudyLayout>
  );
};

export default CurieCaseStudy;
