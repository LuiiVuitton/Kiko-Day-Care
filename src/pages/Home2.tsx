import React from "react";
import "../components/Home2.css";

interface Home2Props {
  imageSrcPath: string;
}

const Home2: React.FC<Home2Props> = ({ imageSrcPath }) => {
  return (
    <div id="Home" style={{ paddingBottom: "40px" }}>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mt-4 mt-md-0 mb-4 mb-md-0">
            <h1 className="display-4 mb-3">
              Welcome to <span style={{ color: "#ffb7c5" }}>KIKO</span> Early
              Learning Center
            </h1>
            <p className="lead">
              We are an Early Learning Center and our commitment to exceptional
              care and nurturing drives us to provide the best support and
              attention to each child in every interaction.
            </p>
            <p>Simplifying Childcare!</p>
            <div className="mt-4">
              <a href="#Contact" className="btn btn-info me-3">
                Contact
              </a>
              <a href="#Projects" className="btn btn-outline-secondary">
                Email
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img src={imageSrcPath} className="img-fluid" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
