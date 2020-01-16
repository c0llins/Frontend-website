import React from "react";
// import "../css/App.css";

function Navbar() {
  return (
    <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="footer-content">
                            <div class="row justify-content-between">
                                <div class="col-xl-6 col-md-6">
                                    <div class="copyright">
                                        <p>© Selio theme made in EU. All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-6">
                                    <div class="footer-social">
                                    <a href="http://facebook.com/medicasa.com.br">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="http://instagram.com/medicasa.com.br">
                  <i className="fa fa-instagram"></i>
                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Navbar;
