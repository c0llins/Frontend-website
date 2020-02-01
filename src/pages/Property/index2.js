import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                {data.detail.map(item => {
                  return (
                    <ul>
                      <li>{item.bath} banheiros</li>
                      <li>{item.beds} quartos</li>
                      <li>{item.rooms} salas</li>
                    </ul>
                  );
                })}
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
                      {data.detail.map(item => {
                        return (
                          <li>
                            <h4>Quartos:</h4>
                            <span> {item.beds}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* FEATURES */}
                  <div className="features-dv">
                    <h3>Features</h3>
                    <form className="form_field">
                      <ul>
                        {data.features.map(item => {
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
                        })}
                      </ul>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 pr-0">
                <div className="sidebar layout2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
