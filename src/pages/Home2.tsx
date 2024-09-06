import "../components/Home2.css";
import Logo from "../assets/FavIconLogo.png";

function Home2() {
  return (
    <div id="Home2" style={{ paddingBottom: "10px" }}>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mt-4 mt-md-0 mb-4 mb-md-0">
            <h1 className="display-4 mb-3">
              Welcome to <span style={{ color: "#ffb7c5" }}>KIKO</span> Early
              Learning Center
            </h1>
            <p className="lead">
              We believe in providing loving care and support to our students.
              Our facility is{" "}
              <span style={{ color: "#ffb7c5" }}>
                dedicated to nurturing children
              </span>{" "}
              in all aspects of their lives. As one of our favorite characters,
              Miss Frizzle, says: "Take chances! Make mistakes! Get messy!"
            </p>
            <p>Sign up Today!</p>
            <div className="mt-4">
              <a href="#Contact" className="btn btn-info me-3">
                Contact
              </a>
              <a
                href="mailto:registration@kikoearlylearningcenter.com"
                className="btn btn-outline-secondary"
              >
                Email
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img src={Logo} className="img-fluid" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
