import React from "react";
// import "../css/App.css";

function Navbar() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-content">
              <div className="row justify-content-between">
                <div className="col-xl-6 col-md-6">
                  <div className="copyright">
                    <p>© MediCasa 2020.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="footer-social">
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
