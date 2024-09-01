import Add from "../assets/Content1.png";

function Contact() {
  return (
    <div id="Contact">
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase mb-4">
                Contact Me
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                {/* Image removed */}
                <form
                  className="custom-form"
                  action="mailto:luis1134@icloud.com"
                  method="post"
                  encType="text/plain"
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="Name"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          type="email"
                          name="Email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <textarea
                          name="Message"
                          className="form-control"
                          placeholder="Your Message"
                          rows={6}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-xl text-uppercase"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src={Add} className="img-fluid w-100" alt="..."></img>
    </div>
  );
}

export default Contact;
