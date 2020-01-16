import React from "react";
import { Link } from 'react-router-dom';
// import "../css/App.css";

function Cta() {
  return (
  <Link to="/" >
            <section class="cta section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="cta-text">
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
