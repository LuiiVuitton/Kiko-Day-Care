import React from "react";
import "./Staff.css"; // Create this CSS file for additional styling if needed
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/Profile2.jpg";
import Profile3 from "../assets/Profile3.jpg";

const Staff: React.FC = () => {
  const staffMembers = [
    {
      name: "name",
      role: "role",
      image: Profile1, // Replace with actual image paths
      description:
        "John is the CEO of the company with over 20 years of experience in the industry.",
    },
    {
      name: "name",
      role: "role",
      image: Profile2, // Replace with actual image paths
      description:
        "Jane is the CTO, leading the tech team with innovative solutions.",
    },
    {
      name: "name",
      role: "role",
      image: Profile3, // Replace with actual image paths
      description:
        "Emily manages the financial aspects of the company, ensuring stability and growth.",
    },
    // Add more staff members as needed
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Meet Our Staff</h1>
      <div className="row">
        {staffMembers.map((member, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <img
                src={member.image}
                className="card-img-top"
                alt={`${member.name}'s profile`}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
