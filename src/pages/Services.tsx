import image1 from "../assets/FamilyCard.jpg";
import image2 from "../assets/FoodCard.jpg";
import image3 from "../assets/VeggiesCard.jpg";
import image4 from "../assets/EmotionalCard.jpg";
import image5 from "../assets/StemCard.jpg";
import image6 from "../assets/BibleCard.jpg";

import "../components/Service.css";

function Services() {
  return (
    <div id="Services">
      <div className="container mt-5 pb-10">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col text-center">
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
          <div className="col-md-4 pb-4">
            <div className="card shadow card-hover">
              <img
                src={image1}
                className="card-img-top img-fluid"
                alt="Card 1"
              />
              <div className="card-body">
                <h5 className="card-title">Family Support</h5>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCard1"
                  aria-expanded="false"
                  aria-controls="collapseCard1"
                >
                  Show Details
                </button>
                <div className="collapse mt-3" id="collapseCard1">
                  <p className="card-text">
                    We believe honesty is the best way. We have an open-door
                    policy. We offer online, books, class resources for every
                    family. We will host cooking, emotional development,
                    parenting classes. We will have families' events once every
                    quarter. We encourage families to get to know one another
                    and support one another. We will offer a parent nights out
                    once every three months to support family's mental health.
                    We are in this together!!!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 pb-4">
            <div className="card shadow card-hover">
              <img
                src={image2}
                className="card-img-top img-fluid"
                alt="Card 2"
              />
              <div className="card-body">
                <h5 className="card-title">Nutrition and Health Program</h5>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCard2"
                  aria-expanded="false"
                  aria-controls="collapseCard2"
                >
                  Show Details
                </button>
                <div className="collapse mt-3" id="collapseCard2">
                  <p className="card-text">
                    Staff will lead an exercise program everyday using different
                    techniques from different culture around the world. Student
                    will learn using their five senses about different fruit or
                    vegetable each week in order to broaden your child horizon.
                    As long as it doesn't affect allergies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 pb-4">
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
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCard3"
                  aria-expanded="false"
                  aria-controls="collapseCard3"
                >
                  Show Details
                </button>
                <div className="collapse mt-3" id="collapseCard3">
                  <p className="card-text">
                    Our Facility will offer an optional Organic/ Vegetarian meal
                    program for an extra fee. The meal plan will cover
                    Breakfast, AM Snack, Lunch, and Pm Snack. The meal plan we
                    offer daily will be adjusted for each child Nutritional
                    needs. For parent that chose to send their child's
                    lunch/breakfast instead of the Organic/Vegetarian meal
                    program will still receive AM snack and PM snack daily.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4 pb-4">
            <div className="card shadow card-hover">
              <img
                src={image4}
                className="card-img-top img-fluid"
                alt="Card 4"
              />
              <div className="card-body">
                <h5 className="card-title">Emotional Development</h5>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCard4"
                  aria-expanded="false"
                  aria-controls="collapseCard4"
                >
                  Show Details
                </button>
                <div className="collapse mt-3" id="collapseCard4">
                  <p className="card-text">
                    Our staff will work with our students identifying their
                    emotions, processing their emotions, and communicating their
                    emotions, using tools that are appropriate for each stage of
                    development. We will work with students on socializing in
                    different settings and working through conflicts that may
                    arise through communication, leading by example, and using
                    tools that are correct for each stage of development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 pb-4">
            <div className="card shadow card-hover">
              <img
                src={image5}
                className="card-img-top img-fluid"
                alt="Card 5"
              />
              <div className="card-body">
                <h5 className="card-title">
                  S.T.E.M Program / Life Skill Program
                </h5>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCard5"
                  aria-expanded="false"
                  aria-controls="collapseCard5"
                >
                  Show Details
                </button>
                <div className="collapse mt-3" id="collapseCard5">
                  <p className="card-text">
                    Students will work on one S.T.E.M. project once a week that
                    aligns with our monthly theme. The project will be adjusted
                    to fit each child's stage of development. Our teachers
                    incorporate life skills curriculum every day based on our
                    students' stages of development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 pb-4">
            <div className="card shadow card-hover">
              <img
                src={image6}
                className="card-img-top img-fluid"
                alt="Card 6"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Optional Early Arrival Bible Program (Christian)
                </h5>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCard6"
                  aria-expanded="false"
                  aria-controls="collapseCard6"
                >
                  Show Details
                </button>
                <div className="collapse mt-3" id="collapseCard6">
                  <p className="card-text">
                    Our facility offers an optional early drop-off Christian
                    program for an extra fee. Students will learn about Jesus
                    through Bible stories, songs, and crafts. Our goal is to
                    inspire others to have a relationship with Jesus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
