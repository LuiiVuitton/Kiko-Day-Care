{
  /* Downloads.css Import*/
}
import "../components/Downloads.css";

{
  /*Form Imports*/
}
import Form1 from "../Forms/occ1216a-Seizure-Medication-Administration-Authorizationform-(Form1).pdf";
import Form2 from "../Forms/occ1216-Medication-Administration-Authorization-(Form2).pdf";
import Form3 from "../Forms/occ1215-Health-Inventory-(Form3).pdf";
import Form4 from "../Forms/occ-1214-emergency-form(Form4).pdf";
import Form5 from "../Forms/occ_1216b-Medication-Incident-Reporting-(Form5).pdf";
import Form6 from "../Forms/Maryland-Immunization-Certification-Form-dhmh-896_-_February_2014(Form6).pdf";
import Form7 from "../Forms/K.I.K.O-Welcome-Packet-(Form7).pdf";
import Form8 from "../Forms/dhmh_4620_bloodleadtestingcertificate_2016 (Form8).pdf";

{
  /* React Icons Import*/
}
import { LiaDownloadSolid } from "react-icons/lia";

{
  /* Function Downloads Begins*/
}

function Downloads() {
  return (
    <div id="Downloads">
      <div className="container my-5">
        {/* Section Title- Downloads*/}
        <h2 className="text-center mb-4">
          Downloads{"    "}
          <LiaDownloadSolid />
        </h2>
        {/* Drop Down Section 1 Starts*/}
        <div className="accordion" id="downloadsAccordion">
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
                Welcome Packet
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#downloadsAccordion"
            >
              <div className="accordion-body">
                <p>
                  Welcome to Kids in Kids Out Early Learning Center! Download
                  our Welcome Package to Learn more about us.
                </p>
                <a href={Form7} className="btn btn-primary mb-2" download>
                  K.I.K.O Welcome Packet (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
                <br />
              </div>
            </div>
          </div>
          {/* Drop Down Section 1 Ends*/}

          {/* Drop Down Section 2 Starts*/}

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
                  occ1216a-Seizure Medication Administration Authorization Form
                  (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
                <br />
                <a href={Form2} className="btn btn-primary" download>
                  occ1216-Medication Administration Authorization (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
              </div>

              <div className="accordion-body">
                <a href={Form3} className="btn btn-primary mb-2" download>
                  occ1215-Health-Inventory- (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
                <br />
                <a href={Form4} className="btn btn-primary" download>
                  occ-1214-Emergency Form (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
              </div>

              <div className="accordion-body">
                <a href={Form5} className="btn btn-primary mb-2" download>
                  occ-1216b-Medication Incident Reporting (PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
                <br />
                <a href={Form6} className="btn btn-primary" download>
                  Maryland Immunization Certification Form(PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
              </div>
              <div className="accordion-body">
                <a href={Form8} className="btn btn-primary" download>
                  Blood Lead Testing Certificate(PDF) {"    "}
                  <LiaDownloadSolid />
                </a>
              </div>
            </div>
          </div>
          {/* Drop Down Section 2 Ends*/}

          {/* <div className="accordion-item">
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
      <a href={Form5} className="btn btn-primary mb-2" download>
        K.I.K.O Welcome Packet (PDF) {"    "}
        <LiaDownloadSolid />
      </a>
      <br />
      <a href={Form6} className="btn btn-primary" download>
        Download Application Form (DOCX) {"    "}
        <LiaDownloadSolid />
      </a>
    </div>
  </div>
</div> */}
        </div>
      </div>
    </div>
  );
}

{
  /* Function Downloads Ends*/
}

export default Downloads;

{
  /* Section 3 is commented out for any future form add ons*/
}
