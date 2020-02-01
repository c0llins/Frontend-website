import React from "react";
import { Link } from "react-router-dom";
// import "../css/App.css";

function Cta() {
  return (
    <Link to="/">
      <section className="cta section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-text">
                <h2>Descubra qual é a melhor casa para alugar</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default Cta;
