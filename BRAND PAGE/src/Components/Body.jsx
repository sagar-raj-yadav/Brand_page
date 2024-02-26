

import './Body.css';


const Body = () => {
  return (
    <>
   
   
      <main className="hero">
      
      <div className="hero-content">
        <h1>YOUR FEET <br />DESERVE <br /> THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button  className="secondary-btn">Shop Now </button>
          <button className='primary-btn'>Category</button>
        </div>

          
          <div className="brand-icons">
            <img src="amazon.png" alt="amazon-logo" />
            <img src="flipkart.png" alt="flipkart-logo" />
          </div>
        
      </div>
      <div  className="hero-image">
        <img src="shoe_image.png" alt="hero-image" />
      </div>
    </main> 
    </>
  )
}

export default Body