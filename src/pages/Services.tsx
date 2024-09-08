import image1 from "../assets/Kids2.jpg";
import image2 from "../assets/Kids3.jpg";
import image3 from "../assets/Kids5.jpg";

import "../components/Service.css";

function Services() {
  return (
    <div id="Services">
      <div className="container mt-5 pb-10">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col text-center">
            {" "}
            {/* Added padding bottom */}
            <h2 className="mb-3">Our Services</h2>
            <p>
              Just as a thriving tree needs strong roots, with K.I.K.O. as your
              family’s roots, your child will blossom.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4  pb-4">
            <div className="card shadow card-hover">
              <img
                src={image1}
                className="card-img-top img-fluid"
                alt="Card 1"
              />
              <div className="card-body">
                <h5 className="card-title">Family Support</h5>
                <p className="card-text">
                  This is a simple card. Replace this text with your content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4  pb-4">
            <div className="card shadow card-hover">
              <img
                src={image2}
                className="card-img-top img-fluid"
                alt="Card 2"
              />
              <div className="card-body">
                <h5 className="card-title">Nutrition and Health Program</h5>
                <p className="card-text">
                  This is another simple card. Replace this text with your
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4  pb-4">
            <div className="card shadow card-hover">
              <img
                src={image3}
                className="card-img-top img-fluid"
                alt="Card 3"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Optional Organic/Vegetarian meal program
                </h5>
                <p className="card-text">
                  This is yet another simple card. Replace this text with your
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-md-4  pb-4">
            <div className="card shadow card-hover">
              <img
                src={image3}
                className="card-img-top img-fluid"
                alt="Card 3"
              />
              <div className="card-body">
                <h5 className="card-title">Emotional Development</h5>
                <p className="card-text">
                  This is yet another simple card. Replace this text with your
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="col-md-4  pb-4">
            <div className="card shadow card-hover">
              <img
                src={image3}
                className="card-img-top img-fluid"
                alt="Card 3"
              />
              <div className="card-body">
                <h5 className="card-title">
                  S.T.E.M program /Life Skill Program
                </h5>
                <p className="card-text">
                  This is yet another simple card. Replace this text with your
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="col-md-4  pb-4">
            <div className="card shadow card-hover">
              <img
                src={image3}
                className="card-img-top img-fluid"
                alt="Card 3"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Optional early arrival Bible program (Christian)
                </h5>
                <p className="card-text">
                  This is yet another simple card. Replace this text with your
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
