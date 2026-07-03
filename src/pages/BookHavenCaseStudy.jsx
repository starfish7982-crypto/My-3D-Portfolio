import React from "react";
import CaseStudyLayout, { Section } from "../components/CaseStudyLayout";
import { getCaseStudyBySlug } from "../constants/caseStudies";
import { arrow } from "../assets/icons";

const BookHavenCaseStudy = () => {
  const study = getCaseStudyBySlug("book-haven");

  return (
    <CaseStudyLayout study={study}>
      <Section title="Overview">
        <p className="text-slate-500 leading-relaxed">{study.overview}</p>
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

      <Section title="Process">
        <div className="flex flex-col gap-8">
          {study.process.map((step, index) => (
            <div key={step.title} className="glassmorphism p-6">
              <p className="text-sm font-semibold text-blue-600 mb-1">
                Step {index + 1}
              </p>
              <h3 className="text-lg font-poppins font-semibold">{step.title}</h3>
              <p className="mt-2 text-slate-500">{step.description}</p>
              {step.highlights && (
                <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-slate-500">
                  {step.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Key Design Decisions">
        <div className="grid md:grid-cols-3 gap-6">
          {study.decisions.map((decision) => (
            <div key={decision.title} className="p-5 rounded-xl bg-white shadow-card">
              <h3 className="font-poppins font-semibold">{decision.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{decision.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Interactive Prototypes">
        <p className="text-slate-500 mb-6">
          Explore the wireframe prototypes in Figma — click through navigation flows on mobile and desktop.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {study.prototypes.map((proto) => (
            <div key={proto.label} className="flex flex-col gap-4">
              <iframe
                title={proto.label}
                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(proto.url)}`}
                className="w-full h-[480px] rounded-xl border border-slate-200 bg-white"
                allowFullScreen
              />
              <a
                href={proto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-blue-600"
              >
                Open {proto.label} in Figma
                <img src={arrow} alt="" className="w-4 h-4 object-contain" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Outcome & Learnings">
        <ul className="list-disc ml-5 space-y-2 text-slate-500">
          {study.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Resources">
        <a
          href={study.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-blue-600"
        >
          View project on GitHub
          <img src={arrow} alt="" className="w-4 h-4 object-contain" />
        </a>
      </Section>
    </CaseStudyLayout>
  );
};

export default BookHavenCaseStudy;
