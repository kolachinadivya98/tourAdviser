import React from 'react';
// import CommentSection from '../shared/CommentSection.jsx';
import {  Col, Container, Row } from 'react-bootstrap';
import FeaturedToursList from './featured-tours/FeaturedToursList.jsx';
import TourCard from '../shared/TourCard.jsx';
import { tours } from '../data/tours.js';

const Tours = () => {
  return (
    <div>
      {/* <CommentSection /> */}
      <section>
        <Container>
          <Row>
          {tours?.map(tour => (
            <Col lg='3' className='mb-4'key={tour.id}>
            <TourCard tour={tours}/>
            </Col>
          )
            )}
         <FeaturedToursList/>
          </Row>
        </Container>

 </section>
    </div>
  )
}

export default Tours
