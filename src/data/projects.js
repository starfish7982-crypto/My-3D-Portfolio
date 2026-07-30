import { estate, summiz, threads, snapgram } from "../assets/icons";

export const technicalProjects = [
    {
        iconUrl: estate,
        theme: "btn-back-pink",
        name: "House Price Prediction",
        description:
            "Built an end-to-end ML pipeline for housing price prediction — performed EDA, feature engineering, and model evaluation (Linear Regression, Random Forest, XGBoost) to identify key price drivers and support data-driven decision-making.",
        link: "https://github.com/starfish7982-crypto/Housing-Price-Prediction",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-red",
        name: "My 3D Portfolio",
        description:
            "Designed and developed this interactive 3D portfolio using React, Vite, and Three.js — demonstrating full-stack frontend skills, responsive design, and modern web development practices.",
        link: "https://github.com/starfish7982-crypto/My-3D-Portfolio",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Ackuretta Platform",
        description:
            "Contributed to cloud-connected 3D printing software for dental applications — see the CURIE design case study for the interface deep dive.",
        link: "https://github.com/starfish7982-crypto/Ackuretta",
    },
    {
        iconUrl: estate,
        theme: "btn-back-pink",
        name: "My e-Commerce Business",
        description:
            "Built and managed a WordPress e-commerce business end-to-end — from product strategy and SEO optimization to automated workflows, driving a 25% increase in sales and operational efficiency.",
        link: "https://github.com/starfish7982-crypto/My-E-commerce-Business",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-red",
        name: "Restaurant Management System",
        description:
            "Led a 6-person cross-functional team to deliver a restaurant management system as a graduation project, coordinating requirements, design, and implementation with an industry partner.",
        link: "https://github.com/starfish7982-crypto/III-Java-Training-Course",
    },
];

/** @deprecated Use technicalProjects — kept for backward compatibility */
export const projects = technicalProjects;
