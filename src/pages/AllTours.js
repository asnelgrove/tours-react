import React from "react";
import { Link } from "react-router-dom";

const AllTours = (props) => {
    
  return (
    <div>
    
    <header>
    <h1>Embark on the Journey of a Lifetime</h1>
    <h2>Choose one of our Professionally-guided Tours</h2>
    </header>
    
    <section className="wrap-content">
    {props.data.map((tour) => 
    <div key={tour.id} className="card">
      
      <p>{tour.title}</p>
      <p>${tour.price}</p>
      <p>Days: {tour.length}</p>
      <img src={tour.image} alt={tour.imgdesc}></img>
      <Link to={`/tour/${tour.id}`}><button className="solid blue info-btn">Learn More</button></Link> 
      
    </div>
    )}
    </section>
    </div>
  )
}

export default AllTours