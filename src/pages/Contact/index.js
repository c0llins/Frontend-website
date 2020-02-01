import React, { Component, Fragment } from "react";
import BeforeFooter from "../../componets/BeforeFooter";
import Cta from "../../componets/Cta";
import Footer from "../../componets/Footer";
import Navbar from "../../componets/Navbar";
// import { Container } from './styles';

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="contact-sec">
          <div className="container">
            <div className="contact-details-sec">
              <div className="row">
                <div className="col-lg-8 col-md-8 pl-0">
                  <div className="contact_form">
                    <h3>Contato</h3>
                    <p>
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulpu tate cursus a sit amet mauris.
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non mauris vitae erat
                      consequat auctor eu in elit.{" "}
                    </p>
                    <form className="js-ajax-form">
                      <div className="form-group no-pt">
                        <div className="missing-message">
                          Populate Missing Fields
                        </div>
                        <div className="success-message">
                          <i className="fa fa-check text-primary"></i> Thank
                          you!. Your message is successfully sent...
                        </div>
                        <div className="error-message">
                          Populate Missing Fields
                        </div>
                      </div>
                      <div className="form-fieldss">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 pl-0">
                            <div className="form-field">
                              <input
                                type="text"
                                name="name"
                                placeholder="Seu Nome"
                                id="name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="form-field">
                              <input
                                type="email"
                                name="email"
                                placeholder="Seu Email"
                                id="email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 pr-0">
                            <div className="form-field">
                              <input
                                type="text"
                                name="phone"
                                placeholder="Seu Telefone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 pl-0 pr-0">
                            <div className="form-field">
                              <textarea
                                name="message"
                                placeholder="Sua Mensagem"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 pl-0">
                            <button
                              type="submit"
                              className="btn-default submit"
                            >
                              Enviar Mensagem
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 pr-0">
                  <div className="contact_info">
                    <h3>Contact Information</h3>
                    <ul className="cont_info">
                      <li>
                        <i className="la la-map-marker"></i> Ponta Porã - MS /
                        Brasil
                      </li>
                      <li>
                        <i className="la la-phone"></i> +55 (67) 98823-1232
                      </li>
                      <li>
                        <i className="la la-envelope"></i>
                        <a href="mailto:contato@medicasa.com.br" title="">
                          contato@medicasa.com.br
                        </a>
                      </li>
                    </ul>
                    <ul className="social_links">
                      <li>
                        <a href="https://facebook.com/medicasa.com.br" title="">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://instagram.com/medicasa.com.br"
                          title=""
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cta></Cta>
        <BeforeFooter></BeforeFooter>
        <Footer></Footer>
      </Fragment>
    );
  }
}
