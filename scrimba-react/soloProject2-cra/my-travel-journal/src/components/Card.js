import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../assets/css/Card.css";

function Card(props) {
  return (
    <div className="card-wrapper">
        <div className='image-container'> 
          <img src={props.imageUrl} alt="travel-places"/>
        </div>
        <div className='text-container'>
          <div className='location-box'>
            <FontAwesomeIcon icon="location-dot" />
            <span className='location'>{props.location}</span>
            <a href={props.googleMapsUrl} target='_blank' rel="noreferrer">View on Google Maps</a>
          </div>
          <div className='title'>{props.title}</div>
          <div className='dates'>{props.startDate} - {props.endDate}</div>
          <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Card