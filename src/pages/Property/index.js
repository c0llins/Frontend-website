import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../componets/ContactRight';
import Navbar from '../../componets/Navbar';
import Search from '../../componets/Search';
// import { Container } from './styles';
import api from '../../services/api';
export default class Property extends Component{
    state = {
      estate: [],
    }
  componentDidMount() {

    api.get(`/show/id/${this.props.match.params.id}`)
    .then(res => {
      const estate = res.data;
      this.setState({ estate });
    })
    const api2 = axios.create({
      baseURL: 'http://localhost:3001/api/owner',
    });
    api2.get(`/show/id/${this.props.match.params.id}`)
    .then(res => {
      const owner = res.data;
      this.setState({ owner });
    })
  }
  render(){
    return (
      <Fragment>

        <Navbar></Navbar>
        <Search></Search>

      


      { this.state.estate.map(estate => {
          return(
          <section className="property-single-pg">
            <div className="container">
            <div className="property-hd-sec">
                    <div className="card">
                        <div className="card-body">
                            <Link to="/">
                          <h3>{estate.name}</h3>
                                <p><i className="la la-map-marker"></i>212 5th Ave, New York</p>
                            </Link>
                            { estate.detail.map(item => {
                              return(
                            <ul>
                           
                                <li>{item.bath} banheiros</li>
                                <li>{item.beds} quartos</li>
                                <li>{item.rooms} salas</li>
                                
                              
                              
                            </ul>
                            )
                            })}
                        </div>
                        <div className="rate-info">
                            <h5>R${estate.price}</h5>
                            <span>{estate.estate_type}</span>
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
                  <p>{estate.description}</p>
                </div>
                {/* DESCRICAO FECHA */}
                <div className="details-info">
                   <h3>Detalhes</h3>
                   <ul>
                     {estate.detail.map(item=>{
                       return(
                        <li>
                          <h4>Quartos:</h4>
                          <span > {item.beds}</span>
                        </li>
                       )
                     })}
                      
                   </ul>
                  </div>

                  {/* FEATURES */}
                  <div className="features-dv">
                    <h3>Features</h3>
                    <form className="form_field">
                        <ul>
                        {estate.features.map(item=>{
                        return(  
                            <li className="input-field">
                                    <input type="checkbox" name="cc" id="c2"  defaultChecked/>
                                    <label>
                                        <span></span>
                                        <small>{item}</small>
                                    </label>
                                </li>
                              )
                          })}
                          
                        </ul>
                    </form>
                </div>
                  
                  {/* MAP */}
                  {console.log(estate.location)
                  }

                      
                    
                  
                </div>
              </div>

              <div className="col-lg-4 pr-0">
                            <div className="sidebar layout2">

                              <Contact name={}></Contact>




                            </div>
                        </div>

              </div>
            </div>

            </div>

                </section>
                )})}
      </Fragment>
      
    );
  }
}
