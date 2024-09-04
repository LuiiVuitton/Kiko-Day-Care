import "../components/About.css";
import image1 from "../assets/Kids1.jpg";

function About() {
  return (
    <div id="About" className="about-section">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-4 position-relative">
            <div className="about-image-container">
              <img
                src={image1}
                alt="About Us"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="mb-4">Who We Are</h2>
            <p className="mb-3">
              We are dedicated to delivering exceptional services and innovative
              solutions to our clients. Our mission drives us to exceed
              expectations and continuously improve.
            </p>
            <p className="mb-3">
              With a vision to make a lasting impact, we aim to lead in our
              industry, setting new standards of excellence.
            </p>
            <a href="#mission" className="btn btn-primary mt-3">
              Learn More
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="about-mission p-5 rounded shadow-lg">
              <h3 className="mb-3">Our Mission</h3>
              <p>
                Our mission is to deliver outstanding services and solutions to
                our clients. We strive to exceed expectations in everything we
                do and are dedicated to continuous improvement.
              </p>
              <h3 className="mt-4 mb-3">Our Vision</h3>
              <p>
                We envision a world where our services make a significant
                difference in the lives of those we serve. We aim to be leaders
                in our industry, setting the standards for excellence.
              </p>
              <h3 className="mt-4 mb-3">About Our Company</h3>
              <p>
                Founded in [Year], our company has grown to become a trusted
                name in the industry. Our team of experts is committed to
                providing innovative solutions and unparalleled customer
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
