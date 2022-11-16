import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ViewTour = (props) => {
   const {data, onAdd} = props
   
  // get tour id from URL parameters
    const params = useParams();
   
  //find tour in data array that matches param
    const chosenTour = data.find(tour => tour.id == params.id)

  return (
    <>
      <section>
        <header>
          <div className='header-buttons'>
            <Link to={'/'} ><button className="solid red">Back to Tours</button></Link>
            </div>
        </header>

        <div>
            <div className='card-wide' key={chosenTour.id}>
              <div>
                <img src={chosenTour.image} alt={chosenTour.imgdesc}></img>
              </div>
              <div >
                <p>{chosenTour.title}</p>
                <p>${chosenTour.price}</p>
                <p>Days: {chosenTour.length}</p>
                <p>{chosenTour.description}</p>
              </div>
              <button className='solid blue info-btn' onClick={()=>onAdd(chosenTour)}>Book this tour</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default ViewTour