import "./Staff.css";
import Profile1 from "../ProfilePictures/Lea-2.png";
import Profile2 from "../ProfilePictures/Yessica-2.png";

function Staff() {
  return (
    <div id="Staff">
      <div className="container staff-section">
        <h2 className="section-title text-center">Our Staff</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card staff-card">
              <img
                src={Profile1}
                className="card-img-top staff-img"
                alt="Profile 1"
              />
              <div className="card-body">
                <h5 className="card-title">Ms. Lea</h5>
                <p className="card-text">
                  I have four years of experience in early childhood education.
                  Prior to that, I worked as a Loan Signing Agent in Virginia,
                  and in my spare time, I was a substitute teacher for Caroline
                  County. Over the past eight years, I have had the privilege of
                  working with children aged 6 months to 14 years, helping them
                  reach important milestones in every aspect of their lives.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card staff-card">
              <img
                src={Profile2}
                className="card-img-top staff-img"
                alt="Profile 2"
              />
              <div className="card-body">
                <h5 className="card-title">Yessica</h5>
                <p className="card-text">
                  As a first-time daycare owner, I am deeply passionate about
                  creating a nurturing and safe environment where children can
                  learn, grow, and thrive. With a strong commitment to early
                  childhood education, my goal is to inspire curiosity and
                  creativity in every child who enters our doors. I believe in
                  the importance of building strong relationships with both the
                  children and their families, ensuring everyone feels supported
                  and valued. Our daycare is more than just a place to care for
                  children—it’s a community where young minds are encouraged to
                  explore and develop in a loving, supportive atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
