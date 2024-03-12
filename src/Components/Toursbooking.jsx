import React,{useRef, useState} from 'react';
import "../styles/tour.css";
import {Container, Row, Col, Form, ListGroup} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Router from '../router/Router';
import { tours } from '../data/tours';
import calculateAvgRating from '../users/avgRating';
import avatar from "../images/avatar.jpg";
import Booking from './Bookings';

const TourBooking = () => {

const {id} = useParams();
const reviewMsgRef = useRef('');
const [tourRating, setTourRating] = useState(null)

 const tour = tours.find(tour => tour.id === id)

 // destructure properties from tour object
 const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tours;
 const {totalRating, avgRating} = calculateAvgRating(reviews);

 //format date
 const options = {day: "numeric", month: "long", year: "numeric"};

//  submit request to the server
const submitHandler = e =>{
    e.preventDefault()
    // const reviewText = reviewMsgRef.current.value;

}

  return (
    <>
    
     <section>
        <Container>
            <Row>
                <Col lg="8">
                <div className="tour__content">
                    <img src={photo} alt="" />
                    <div className="tour__info">
                        <h2>{title}</h2>
                        <div className="d-flex align-items-center gap-5">
                        <span className='tour__rating d-flex align-items-center gap-1' onClick={(e) => e.target.value(1)}>
                         <i className='ri-star-s-fill'  style={{color : "var(--secondary-color)"}}></i>
                          {avgRating === 0 ? "Not rated" : avgRating} 
                         {totalRating === 0 ? (
                           " (Not rated)"
                         ) : (
                           <span>({reviews?.length})</span>
                         )}
                       </span>

                       <span>
                        <i className='ri-map-pin-user-fill'></i> {address}
                       </span>
                       </div>
                       <div className="tour__extra-details">
                        <span><i className='ri-map-pin-2-line'></i> {city} </span>
                        <span><i className='ri-money-dollar-circle-line'></i> {price} /per person </span>
                        <span><i className='ri-map-pin-time-line'></i> {distance} k/m </span>
                        <span><i className='ri-group-line'></i> {maxGroupSize} people </span>
                       </div>
                       <h5>Description</h5>
                       <p>{desc}</p>
                        </div>

                                      {/* tour reviews section starts here */}

                     <div className="tour__reviews mt-4">
                      <h4>Reviews ({reviews?.length} reviews)</h4>

                      <Form onSubmit={submitHandler}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                            <span onClick={() => setTourRating(1)}>1<i className='ri-star-s-fill'></i></span>
                            <span onClick={() => setTourRating(2)}>2<i className='ri-star-s-fill'></i></span>
                            <span onClick={() => setTourRating(3)}>3<i className='ri-star-s-fill'></i></span>
                            <span onClick={() => setTourRating(4)}>4<i className='ri-star-s-fill'></i></span>
                            <span onClick={() => setTourRating(5)}>5<i className='ri-star-s-fill'></i></span>
                        </div>
                        <div className="review__input">
                            <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' />
                            <button className='btn primary__btn text-white' text="submit">Submit</button>
                        </div>
                      </Form>
                      <ListGroup className='user__reviews'>
                       {reviews?.map(review => (
                        <div className="review__item">
                            <img src={avatar} alt="" />
                            <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h5>Durga Prasad</h5>
                                        <p>
                                            {new Date("12-21-2023").toLocaleDateString(
                                                "en-US", options
                                            )}
                                        </p>
                                    </div>
                                <span className="d-flex align-items-center">
                                    5 <i className='ri-star-s-fill'></i>
                                </span>
                                </div>
                                <h6>Amazing tour</h6>
                            </div>
                        </div>
                       ))}
                      </ListGroup>
                     </div>

                                      {/* tour reviews section ends here */}
                    </div>
                
                </Col>
                <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
                </Col>
            </Row>
        </Container>
     </section>
     

    </>
  )
}

export default TourBooking