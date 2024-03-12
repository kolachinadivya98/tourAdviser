import React, { useState } from 'react';
import "../styles/newsletter.css";
import { Container, Row, Col } from 'react-bootstrap';
import touristImage from '../images/male-tourist.png';

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const isEmailValid = (email) => {
      // Regular expression for a simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleSubscribe = (event) => {
      event.preventDefault();
    
      if (!isEmailValid(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
    
      // Store the email in local storage
      localStorage.setItem('subscribedEmail', email);
    
      // Log the value stored in local storage
      console.log('Email stored in local storage:', localStorage.getItem('subscribedEmail'));
    
      setSubscribed(true);
      setErrorMessage('');
    };

  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg="6">
            <div className="newsletter__content">
                <h2>Subscribe now for useful travelling information.</h2>
                <form onSubmit={handleSubscribe}>
                <div className="newsletter__input">
                    
                    <input type="email" placeholder='Enter your email'  value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </form>
                {subscribed && <p className="text-success mt-3">Successfully subscribed!</p>}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia alias assumenda nesciunt earum possimus.
                </p>
            </div>
            </Col>
            <Col lg="6">
            <div className="newsletter__img">
                <img src={touristImage} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter