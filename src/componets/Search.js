import React from "react";
function Search() {
  return (
      <section className="form-banner">
      <h3 className="vis-hid">Invisible</h3>
      <div className="banner_form">
        <div className="container">
          <form action="#" className="row banner-search">
            <div className="form_field addres">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
              />
            </div>
            <div className="form_field tpmax">
              <div className="form-group">
                <div className="drop-menu">
                  <div className="select">
                    <span>Indefinido</span>
                    <i className="fa fa-angle-down"></i>
                  </div>
                  <input type="hidden" name="gender" />
                  <ul className="dropeddown">
                    <li>Apartamento</li>
                    <li>Casa</li>
                    <li>Sobrado</li>
                    <li>Quitinete</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form_field tpmax">
              <div className="form-group">
                <div className="drop-menu">
                  <div className="select">
                    <span>Valor Mínimo</span>
                    <i className="fa fa-angle-down"></i>
                  </div>
                  <input type="hidden" name="gender" />
                  <ul className="dropeddown">
                    <li>R$500</li>
                    <li>R$600</li>
                    <li>R$700</li>
                    <li>R$800</li>
                    <li>R$900</li>
                    <li>R$1000</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form_field tpmax">
              <div className="form-group">
                <div className="drop-menu">
                  <div className="select">
                    <span>Valor Máximo</span>
                    <i className="fa fa-angle-down"></i>
                  </div>
                  <input type="hidden" name="gender" />
                  <ul className="dropeddown">
                    <li>R$1000</li>
                    <li>R$1300</li>
                    <li>R$1600</li>
                    <li>R$1900</li>
                    <li>R$2200</li>
                    <li>R$2500</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form_field srch-btn">
              <a href="#a" className="btn btn-outline-primary ">
                <i className="la la-search"></i>
                <span>Buscar</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Search;
