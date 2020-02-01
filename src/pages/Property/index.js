import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyMap from "../../componets/mapbox/Property";
import Navbar from "../../componets/Navbar";
import Search from "../../componets/Search";
import api from "../../services/api";

export default function Property(props) {
  const { match } = props;
  let { id } = match.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get(`/find/proprietary/${id}`).then(result => {
      setData(result.data);
      console.log(JSON.stringify(result.data));
      console.log(result.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Navbar></Navbar>
      <Search></Search>

      <section className="property-single-pg">
        <div className="container">
          <div className="property-hd-sec">
            <div className="card">
              <div className="card-body">
                <Link to="/">
                  <h3>{data.name}</h3>
                  <p>
                    <i className="la la-map-marker"></i>212 5th Ave, New York
                  </p>
                </Link>
                {!data.detail ? (
                  <div>Loading...</div>
                ) : (
                  data.detail.map(item => {
                    return (
                      <ul>
                        <li>{data.detail[0].bath} banheiros</li>
                        <li>{data.detail[0].beds} quartos</li>
                        <li>{data.detail[0].rooms} salas</li>
                      </ul>
                    );
                  })
                )}
              </div>
              <div className="rate-info">
                <h5>R${data.price}</h5>
                <span>{data.property_type}</span>
              </div>
            </div>
          </div>

          <div className="property-single-page-content">
            <div className="row">
              <div className="col-lg-8 pl-0 pr-0">
                <div className="property-pg-left">
                  {/* Descricao */}
                  <div className="descp-text">
                    <h3>Descrição</h3>
                    <p>{data.description}</p>
                  </div>
                  {/* DESCRICAO FECHA */}
                  <div className="details-info">
                    <h3>Detalhes</h3>

                    <ul>
                      {!data.detail ? (
                        <div>Loading...</div>
                      ) : (
                        data.detail.map(item => {
                          return (
                            <li>
                              <h4>Quartos:</h4>
                              <span> {item.beds}</span>
                            </li>
                          );
                        })
                      )}
                    </ul>
                  </div>

                  {/* FEATURES */}
                  <div className="features-dv">
                    <h3>Features</h3>
                    <form className="form_field">
                      <ul>
                        {!data.features ? (
                          <div>Loading...</div>
                        ) : (
                          data.features.map(item => {
                            return (
                              <li className="input-field">
                                <input
                                  type="checkbox"
                                  name="cc"
                                  id="c2"
                                  defaultChecked
                                />
                                <label>
                                  <span></span>
                                  <small>{item}</small>
                                </label>
                              </li>
                            );
                          })
                        )}
                      </ul>
                    </form>
                  </div>

                  <div class="map-dv">
                    <h3>
                      Location{" "}
                      {!data.location ? (
                        <div>Loading...</div>
                      ) : (
                        data.location.lng
                      )}
                    </h3>
                    <div id="map-container" class="fullwidth-home-map">
                      {/* <PropertyMap
                        lng={
                          !data.location ? (
                            <div>Loading...</div>
                          ) : (
                            data.location.lng
                          )
                        }
                        lat={
                          !data.location ? (
                            <div>Loading...</div>
                          ) : (
                            data.location.lat
                          )
                        }
                      ></PropertyMap> */}
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>

              <div className="col-lg-4 pr-0">
                <div className="sidebar layout2">
                  <div class="widget widget-form">
                    <h3 class="widget-title">
                      Entre em contato com proprietario
                    </h3>

                    <div class="contct-info">
                      <img src="https://via.placeholder.com/81x74" alt="" />
                      <div class="contct-nf">
                        <h3>
                          {!data.proprietary ? (
                            <div>Loading...</div>
                          ) : (
                            data.proprietary.name
                          )}
                        </h3>
                        <h4>Douglas and Eleman Agency</h4>
                        <span>
                          <i class="la la-phone"></i>+1 212-925-3797
                        </span>
                      </div>
                    </div>

                    <div class="post-comment-sec">
                      <form>
                        <div class="form-field">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div class="form-field">
                          <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div class="form-field">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                          />
                        </div>
                        <div class="form-field">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                        <button type="submit" class="btn2">
                          Contact
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
