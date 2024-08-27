import React from "react";
import "./Staff.css";
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/Profile2.jpg";

const Staff: React.FC = () => {
  const staffMembers = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      image: Profile1,
      description:
        "John is the CEO of the company with over 20 years of experience in the industry.",
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      image: Profile2,
      description:
        "Jane is the CTO, leading the tech team with innovative solutions.",
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
