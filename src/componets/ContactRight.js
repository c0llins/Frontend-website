import React from 'react';

// import { Container } from './styles';

export default function Contact(props) {
  return (
    
    <div className="widget widget-form">
    <h3 className="widget-title">Contact Listing Agent</h3>
    <div className="contct-info">
        <img src={props.img} alt=""/>
        <div className="contct-nf">
            <h3>{props.name}</h3>
            <h4>Douglas and Eleman Agency</h4>
            <span><i className="la la-phone"></i>{props.phone}</span>
        </div>
    </div>
    <div className="post-comment-sec">
        <form>
            <div className="form-field">
                <input type="text" name="name" placeholder="Your Name"/>
            </div>
            <div className="form-field">
                <input type="text" name="email" placeholder="Your Email"/>
            </div>
            <div className="form-field">
                <input type="text" name="phone" placeholder="Your Phone"/>
            </div>
            <div className="form-field">
                <textarea name="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn2">Contact</button>
        </form>
    </div>
</div>

  );
}
