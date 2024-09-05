import "../components/Downloads.css";
import Form1 from "../Forms/seizure-medication-administration-authorization-form.pdf";
import Form2 from "../Forms/occ1216-medication-administration-authorization.pdf";

import { LiaDownloadSolid } from "react-icons/lia";

function Downloads() {
  return (
    <div id="Downloads">
      <div className="container my-5">
        <h2 className="text-center mb-4">
          Downloads{"    "}
          <LiaDownloadSolid />
        </h2>
        <div className="accordion" id="downloadsAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Registration Forms
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#downloadsAccordion"
            >
              <div className="accordion-body">
                <p>Complete these forms to register for our services.</p>
                <a href={Form1} className="btn btn-primary mb-2" download>
                  Asthma Action Plan and Medication Administration Authorization
                  Form (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
                <br />
                <a href={Form2} className="btn btn-primary" download>
                  Medication and Administration Authorization (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Feedback Forms
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#downloadsAccordion"
            >
              <div className="accordion-body">
                <p>We value your feedback. Please fill out these forms.</p>
                <a
                  href="/path/to/feedback-form.pdf"
                  className="btn btn-primary mb-2"
                  download
                >
                  Download Feedback Form (PDF)
                </a>
                <br />
                <a
                  href="/path/to/feedback-form.docx"
                  className="btn btn-primary"
                  download
                >
                  Download Feedback Form (DOCX)
                </a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Application Forms
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#downloadsAccordion"
            >
              <div className="accordion-body">
                <p>Use these forms to apply for our program.</p>
                <a
                  href="/path/to/application-form.pdf"
                  className="btn btn-primary mb-2"
                  download
                >
                  Download Application Form (PDF)
                </a>
                <br />
                <a
                  href="/path/to/application-form.docx"
                  className="btn btn-primary"
                  download
                >
                  Download Application Form (DOCX)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
