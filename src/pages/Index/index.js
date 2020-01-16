import React, { Component, Fragment } from 'react';
import BeforeFooter from '../../componets/BeforeFooter';
import Card from '../../componets/card/Card';
import Cta from '../../componets/Cta';
import Footer from '../../componets/Footer';
import Navbar from "../../componets/Navbar";
import Search from '../../componets/Search';
import api from '../../services/api';



export default class Index extends Component {
  state = {
    estates: []
  }
  componentDidMount() {
    api.get(`/show`)
      .then(res => {
        const estates = res.data;
        this.setState({ estates });
      })
  }
  render() {
    return (
      <Fragment>
      <Navbar></Navbar>
      <Search></Search>
      <section className="listing-main-sec section-padding">
        <div className="container">
          <div className="listing-main-sec-details">
            <div className="row">
              <div className="col-lg-8">
                <div className="listing-directs">
                  <div className="list-head">
                    <div className="sortby">
                      <span>Ordernar por:</span>
                      <div className="drop-menu">
                        <div className="select">
                          <span>Relevante</span>
                          <i className="la la-caret-down"></i>
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

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="grid-view-tab1"
                      role="tabpanel"
                      aria-labelledby="grid-view-tab1"
                    >
                      <div className="list_products">
                        <div className="row">
                        { this.state.estates.map((estate , index)=> {
                          
                          return(<div className="col-lg-6 col-md-6">
                          <Card key={index}
                            id={estate._id}
                            name={estate.name}
                            price={estate.price}
                            imgLink={estate.img[0]}
                            imgAlt={estate.name}
                            location={"Testesss"}
                            info={estate.detail}
                            type={estate.estate_type}
                          />
                         </div>)
                        })}
                          
{/* 
                          { <div className="col-lg-6 col-md-6">
                            <Card
                              name="Teste"
                              price={123}
                              imgLink={
                                "https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/p960x960/54730755_2290086244347030_2050000667908505600_o.jpg?_nc_cat=104&_nc_ohc=crnQhd9sPo0AQknae-QBv2KyQge5UkK3dasR78bxK-6pfZlVmT0-Dr-5w&_nc_ht=scontent-gru1-1.xx&oh=279aa4e92070ea588537297d5700964d&oe=5E7146B4"
                              }
                              imgAlt={"sds"}
                              location={"Teste"}
                            />
                          </div> } */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item active">
                        <a className="page-link" href="#a">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#a">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#a" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="la la-arrow-right"></i>
                          </span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar layout2">
                  <div className="widget">
                    <h3 className="widget-title">Property Search</h3>
                    <img
                      src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/p960x960/54730755_2290086244347030_2050000667908505600_o.jpg?_nc_cat=104&_nc_ohc=crnQhd9sPo0AQknae-QBv2KyQge5UkK3dasR78bxK-6pfZlVmT0-Dr-5w&_nc_ht=scontent-gru1-1.xx&oh=279aa4e92070ea588537297d5700964d&oe=5E7146B4"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="widget widget-featured-property">
                    <h3 className="widget-title">Featured Property</h3>
                    <div className="card">
                      <a href="24_Property_Single.html" title="">
                        <div className="img-block">
                          <div className="overlay"></div>
                          <img
                            src="https://via.placeholder.com/370x295"
                            alt=""
                            className="img-fluid"
                          />
                          <div className="rate-info">
                            <h5>$550.000</h5>
                            <span>For Rent</span>
                          </div>
                        </div>
                      </a>
                      <div className="card-body">
                        <a href="#a" title="">
                          <h3>Traditional Apartments</h3>
                          <p>
                            <i className="la la-map-marker"></i>212 5th Ave, New
                            York
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-catgs">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <li>
                        <a href="#a" title="">
                          <i className="la la-angle-right"></i>
                          <span>House</span>
                        </a>
                        <span>7</span>
                      </li>
                      <li>
                        <a href="#a" title="">
                          <i className="la la-angle-right"></i>
                          <span>Condo</span>
                        </a>
                        <span>15</span>
                      </li>
                      <li>
                        <a href="#a" title="">
                          <i className="la la-angle-right"></i>
                          <span>Townhouse</span>
                        </a>
                        <span>4</span>
                      </li>
                      <li>
                        <a href="#a" title="">
                          <i className="la la-angle-right"></i>
                          <span>Coop</span>
                        </a>
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-posts">
                    <h3 className="widget-title">Popular Posts</h3>
                    <ul>
                      <li>
                        <div className="wd-posts">
                          <div className="ps-img">
                            <a href="14_Blog_Open.html" title="">
                              <img
                                src="https://via.placeholder.com/112x89"
                                alt=""
                              />
                            </a>
                          </div>

                          <div className="ps-info">
                            <h3>
                              <a href="14_Blog_Open.html" title="">
                                Traditional Apartments
                              </a>
                            </h3>
                            <strong>$125.700</strong>
                            <span>
                              <i className="la la-map-marker"></i>212 5th Ave,
                              New York
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="wd-posts">
                          <div className="ps-img">
                            <a href="14_Blog_Open.html" title="">
                              <img
                                src="https://via.placeholder.com/112x89"
                                alt=""
                              />
                            </a>
                          </div>

                          <div className="ps-info">
                            <h3>
                              <a href="14_Blog_Open.html" title="">
                                Luxury Home
                              </a>
                            </h3>
                            <strong>$125.700</strong>
                            <span>
                              <i className="la la-map-marker"></i>212 5th Ave,
                              New York
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="wd-posts">
                          <div className="ps-img">
                            <a href="14_Blog_Open.html" title="">
                              <img
                                src="https://via.placeholder.com/112x89"
                                alt=""
                              />
                            </a>
                          </div>

                          <div className="ps-info">
                            <h3>
                              <a href="14_Blog_Open.html" title="">
                                Real Estate Industry
                              </a>
                            </h3>
                            <strong>$125.700</strong>
                            <span>
                              <i className="la la-map-marker"></i>212 5th Ave,
                              New York
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta></Cta>
      <BeforeFooter></BeforeFooter>
      <Footer></Footer>
    </Fragment>
    );
  }
}


