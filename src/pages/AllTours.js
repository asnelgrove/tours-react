import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllTours = (props) => {
    const [tours, setTours] = useState(props.data)
    const [region, setRegion] = useState();

    useEffect(() => {
      if (region) {
        let filtered = props.data.filter(tour => tour.location === region);
        setTours(filtered);
      }
    }, [region])

  return (
    <div>
    
    <header>
    <h1>Embark on the Journey of a Lifetime</h1>
    <h2>Choose one of our Professionally-guided Tours</h2>
    </header>
    
    <section className="wrap-content gr-bg">
    <div className="btns-inline">
      <p>Filter tours by region</p>
      <button className='filtr solid' onClick={()=>setRegion('Africa')}>Africa</button>
      <button className='filtr solid' onClick={()=>setRegion('Americas')}>Americas</button>
      <button className='filtr solid' onClick={()=>setRegion('Asia')}>Asia</button>
      <button className='filtr solid' onClick={()=>setRegion('Australia-Pacific')}>Australia-Pacific</button>
      <button className='filtr solid' onClick={()=>setRegion('Europe')}>Europe</button>
      <button className='filtr solid' onClick={()=>{setTours(props.data); setRegion(null)}}>All</button>
    </div>  
    <div className="flexwrap"> 
    {tours.map((tour) => 
    <div key={tour.id} className="card">
      
      <p>{tour.title}</p>
      <p>${tour.price}</p>
      <p>Days: {tour.length}</p>
      <img src={tour.image} alt={tour.imgdesc}></img>
      <Link to={`/tour/${tour.id}`}><button className="solid blue info-btn">Learn More</button></Link> 
      
    </div>
    )}
    </div> 
    </section>
    </div>
  )
}

export default AllTours