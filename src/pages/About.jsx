import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills ,experiences, educations} from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Sally</span>
      </h1>
      <div className="mt-5 flex flex-col gap-5 text-slate-500">
        <p>
          I build user-centered, data-driven products from concept to delivery — gathering requirements, designing intuitive interfaces, and shipping scalable software. With 6+ years across AI, manufacturing, and e-commerce, I work at the intersection of business strategy, product execution, and engineering.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Requirements & Analysis",
            "Product Strategy",
            "Agile Delivery",
            "UX & Prototyping",
            "Full-Stack Engineering",
            "Data-Driven Decisions",
          ].map((strength) => (
            <span
              key={strength}
              className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
            >
              {strength}
            </span>
          ))}
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=>(
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've partnered with product managers, engineers, designers, and business stakeholders to deliver cross-functional initiatives with measurable impact. Here's the rundown:
          </p>
        </div>
        
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index)=>(
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
                iconStyle={{background:experience.iconBg}}
                contentStyle={{
                  borderBottom:'8px',
                  borderStyle:'solid',
                  borderBottomColor:experience.iconBg,
                  boxShadow:'none'
                }}  
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base"
                  style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point,index)=>(
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1
                    text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
       


       <div className="py-16">
        <h3 className="subhead-text">Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My background bridges business strategy and technical execution — a B.A. in Business Management, a B.S. in Computer Science, and an ongoing M.S. in Computer Science at Georgia Tech (expected Dec 2028). Certified in Professional Scrum Master I (PSM I), ITIL 4, and CompTIA Security+/Network+.
          </p>
        </div>
        
        <div className="mt-12 flex">
          <VerticalTimeline>
            {educations.map((education, index)=>(
              <VerticalTimelineElement
                key={education.school_name}
                date={education.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img
                    src={education.icon}
                    alt={education.school_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
                iconStyle={{background:education.iconBg}}
                contentStyle={{
                  borderBottom:'8px',
                  borderStyle:'solid',
                  borderBottomColor:education.iconBg,
                  boxShadow:'none'
                }}  
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {education.school_name}
                  </h3>
                  <p className="text-black-500 font-medium font-base"
                  style={{margin:0}}>
                    {education.degree}
                  </p>
                </div>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200"/>

      <CTA/>
    </section>
  )
}

export default About