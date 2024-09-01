import React from "react";
import "../components/About.css";
import image1 from "../assets/Kids5.jpg";
import image2 from "../assets/Kids6.jpg";
import image3 from "../assets/Kids7.jpg";

interface AboutProps {
  VisionImageSrc: string;
  MissionImageSrc: string;
  GoalImageSrc: string;
}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      {/* Content Section */}
      <div className="about-content">
        {/* Vision Section */}
        <div className="about-section vision-section">
          <div className="about-section-image">
            <img src={image1} alt="Vision" className="about-card-image" />
          </div>
          <div className="about-section-content">
            <h2 className="about-section-title">Our Vision</h2>
            <p className="about-section-description">
              We envision a world where technology bridges gaps and brings
              people closer together. Our vision is to innovate solutions that
              redefine the possible.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="about-section mission-section">
          <div className="about-section-content">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-section-description">
              Our mission is to empower every individual and organization with
              tools that drive success and inspire creativity, fostering a
              culture of innovation.
            </p>
          </div>
          <div className="about-section-image">
            <img src={image2} alt="Mission" className="about-card-image" />
          </div>
        </div>

        {/* Goal Section */}
        <div className="about-section goal-section">
          <div className="about-section-image">
            <img src={image3} alt="Goal" className="about-card-image" />
          </div>
          <div className="about-section-content">
            <h2 className="about-section-title">Our Goal</h2>
            <p className="about-section-description">
              We aim to lead by example, setting new standards in our industry
              and creating lasting impact through sustainable practices and
              groundbreaking ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
