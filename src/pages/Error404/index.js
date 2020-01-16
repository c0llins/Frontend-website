import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../componets/Navbar';
// import { Container } from './styles';


export default class Error404 extends Component{

  render(){
    return (
      <Fragment>

        <Navbar></Navbar>
        <section className="error-sec">
                <div className="eror-sec-data">
                    <h1>404</h1>
                    <p>A página que você está procurando não existe ou foi deletada.</p>
                    <Link to="/" className="btn2">Voltar à página inicial</Link>
                </div>
            </section>

       

        
      </Fragment>
      
    );
  }
}
