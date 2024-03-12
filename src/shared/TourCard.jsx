import React from 'react';
import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../shared/tour-card.css";
import  calculateAvgRating from "../users/avgRating"
// import Router from '../router/Router';
import { tours } from '../data/tours';

const TourCard = ({ tour }) => {
    const { id, title,city, photo, price, featured, reviews } = tours;


    const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className='tour__card'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                {featured && <span>Featured</span>}
            </div>

            <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
         <span className='tour__location d-flex align-items-center gap-1'>
         <i class="ri-map-pin-line"></i> {city} 
         </span>
         <span className='tour__rating d-flex align-items-center gap-1'>
         <i class="ri-star-line"></i> {avgRating === 0 ? "Not rated" : avgRating} 
           {totalRating === 0 ? (
             " (Not rated)"
           ) : (
             <span>({reviews?.length})</span>
           )}
         </span>
         
        </div>

        <h5 className='tour__title'><Link to={`/tours/${id}`}> {title} </Link></h5>

        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
          <h5>
            ${price} <span> /per person</span>
          </h5>
          <button className='btn booking__btn'>
            <Link to={`/tours/${id}`}>Book <br /> Now</Link>
          </button>
        </div>
        </CardBody>
        </Card>

        
    </div>
  )
}

export default TourCard
