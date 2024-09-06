import "../components/About.css";

function About() {
  return (
    <>
      {/* Parallax Section */}
      <div className="parallax-section">
        <div className="parallax-content">
          <h1>Kids in Kids Out</h1>
          <p>We are committed to delivering excellence in everything we do.</p>
        </div>
      </div>
      {/* About Section */}
      <div id="About" className="about-section">
        <h2 className="text-center mb-4">About Us</h2>

        <div className="container my-5">
          <div className="row mt-5">
            <div className="col-12">
              <div className="about-mission p-5 rounded shadow-lg">
                <h3 className="mb-3">Our Mission</h3>
                <p>
                  Our mission as early childhood educators is to provide
                  holistic care for every child in our program. We are dedicated
                  to fostering a nurturing environment where each child can grow
                  through a creative, age-appropriate educational curriculum
                  that emphasizes Montessori principles. We aim to inspire our
                  students to reach for the stars and beyond through our STEM
                  and life skills programs, while also supporting families in
                  every aspect of their journey.
                </p>
                <h3 className="mt-4 mb-3">Our Vision</h3>
                <p>
                  We envision a future where every child is empowered to explore
                  their full potential, equipped with the skills and confidence
                  to succeed in a rapidly changing world. Through innovative
                  programs and a strong partnership with families, we aim to set
                  the standard for excellence in early childhood education,
                  fostering lifelong learners and responsible citizens.
                </p>
                <h3 className="mt-4 mb-3">About Our Company</h3>
                <p>
                  Our facility is built upon the foundation of delivering
                  comprehensive and individualized care for every child. With a
                  curriculum rooted in Montessori principles and an emphasis on
                  STEM and life skills, we are committed to helping children
                  develop the essential tools they need to thrive. By supporting
                  families and encouraging creativity, we ensure that each child
                  in our care receives the building blocks necessary for a
                  strong future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
