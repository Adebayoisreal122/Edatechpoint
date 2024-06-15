import React from 'react'

function About() {
  return (
    <>
     <div className="container py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500" alt="About Us" className="img-fluid mb-4" />
        </div>
        <div className="col-md-6">
          <h5>Our Company</h5>
          <p>
            We are a leading real estate and surveying company with years of experience in the industry. Our mission is
            to provide exceptional service and deliver outstanding results for our clients.
          </p>
          <h5>Our Values</h5>
          <ul>
            <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
            <li>Excellence: We strive for excellence in everything we do.</li>
            <li>Customer Focus: We put our clients at the heart of everything we do.</li>
          </ul>
        </div>
      </div>
    </div> 
    </>
  )
}

export default About
