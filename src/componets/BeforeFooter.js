// import "../css/App.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
function BeforeFooter() {
  return (
    <section className="bottom section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-sm-6 col-md-4">
            <div className="bottom-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-3">
            <div className="bottom-list">
              <h3>Links úteis</h3>
              <ul>
                <li>
                  <Link to="/">Ínicio</Link>
                </li>
                <li>
                  <Link to="/contact">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5 col-sm-12 col-md-5 pl-0">
            <div className="bottom-desc">
              <h3>Informações Adicionais</h3>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. className aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeFooter;
