import "../components/Home.css";

import imageOne from "../assets/Kids7.jpg";
import imageTwo from "../assets/Kids6.jpg";
import imageThree from "../assets/Kids5.jpg";

function Home() {
  return (
    <div id="/">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageOne} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Child Care Service</h5>
              <p>(301)-201-0224</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imageTwo} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Now Open!</h5>
              <p>Register Today!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imageThree} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>K.I.K.O Early Learning Center</h5>
              <p>Kids in Kids Out</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
