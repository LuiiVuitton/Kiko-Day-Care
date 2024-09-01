import "../components/Home.css";

import imageOne from "../assets/Kids7.jpg";
import imageTwo from "../assets/Kids6.jpg";
import imageThree from "../assets/Kids5.jpg";

function Home() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imageOne} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Caption for Slide 1</h5>
            <p>Description for Slide 1.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageTwo} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Caption for Slide 2</h5>
            <p>Description for Slide 2.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imageThree} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Caption for Slide 3</h5>
            <p>Description for Slide 3.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
