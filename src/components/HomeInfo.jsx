import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text,link,btnText})=>(
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Sally</span> 👋
            <br/>
            Technical professional bridging product, engineering, and user experience.
        </h1>
    ),
    2:(
        <InfoBox
            text = "6+ years turning business needs into shipped products across AI, manufacturing, and e-commerce."
            link="/about"
            btnText="Learn more"
        />
    ),
    3:(
        <InfoBox
            text = "From requirements and wireframes to code and delivery — see the work behind $4M+ in impact."
            link="/design"
            btnText="View case studies"
        />
    ),
    4:(
        <InfoBox
            text = "Open to new opportunities. Let's connect and explore how I can help your team."
            link="/contact"
            btnText="Get in touch"
        />
    )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo