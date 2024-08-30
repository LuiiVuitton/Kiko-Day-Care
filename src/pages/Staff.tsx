import React from "react";
import "./Staff.css";
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/Profile2.jpg";

const Staff: React.FC = () => {
  const staffMembers = [
    {
      name: "Ms.Lea",
      role: "Owner",
      image: Profile1,
      description:
        "I have four years of experience in Early Childhood Education and previously worked as a loan signing agent in Virginia. During my spare time, I also served as a substitute teacher in Caroline County. Over the past eight years, I've had the privilege of working with children aged 6 months to 14 years, helping them reach important milestones in every aspect of their lives.",
    },
    {
      name: "Yessica",
      role: "Co-Owner",
      image: Profile2,
      description: "About section needed. Profile pictures needed.",
    },
  ];

  return (
    <div className="staff-container">
      <h1 className="staff-title">Meet Our Staff</h1>
      <div className="staff-grid">
        {staffMembers.map((member, index) => (
          <div className="staff-card" key={index}>
            <div className="staff-card-image">
              <img src={member.image} alt={`${member.name}'s profile`} />
            </div>
            <div className="staff-card-body">
              <h5 className="staff-card-title">{member.name}</h5>
              <h6 className="staff-card-role">{member.role}</h6>
              <p className="staff-card-text">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
