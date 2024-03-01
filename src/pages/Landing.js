import React from 'react'
import { Link } from 'react-router-dom'
import customer1 from "../images/customer1.jpg"
import customer2 from "../images/customer2.jpg"

const Landing = () => {
  return (
    <div>
      <div className='hero big-sect'>
        <h1>Travel the World with Tempus Tours</h1>
        <p className='big-text'>Cupidatat sunt culpa duis aute culpa duis ex consequat anim tempor est sit ad.</p>
        <Link to={'/all-tours'}><button className='solid red cta'>See our tours</button></Link>
        <p className='small'>Photo by <a href="https://unsplash.com/@chelseaessig?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chelsea Essig</a> on <a href="https://unsplash.com/photos/zCSIIoGQr2s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>
      <div className='big-sect'>
        <h2>Why choose Tempus?</h2>
        <p className='big-text'>Labore enim voluptate ea culpa commodo laboris amet occaecat minim. Magna exercitation incididunt ut laborum. Do aliquip officia sunt consequat cillum consectetur id. Ad officia eu aliqua dolore est aliqua do deserunt adipisicing qui reprehenderit non ipsum.</p>
      </div>



      <section >
        <div className='gr-bg-header'>
          <h2 className='ital'>Don't take it from us - Travelers love Tempus Tours!</h2>
        </div>
        <div className='gr-bg flexwrap'>
          <div className='card'>
            <img src={customer1} alt='customer face' className='round' />
            <p className='ital'>"Tempus Tours takes you to the most amazing places."</p>
            <p>- Clotworthy</p>
          </div>
          <div className='card'>
            <img src={customer2} alt='customer face' className='round' />
            <p className='ital'>"The experience was unforgettable. I will cherish these memories forever."</p>
            <p>- Plangon</p>
          </div>
        </div>
      </section>

      <div className='big-sect'>
        <p className='big-text'>
          What are you waiting for? Start your journey today!
        </p>
        <Link to={"/all-tours"}><button className='solid red cta'>View Tours</button></Link>

      </div>


    </div>
  )
}

export default Landing