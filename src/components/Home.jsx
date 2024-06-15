import React from 'react'

function Home() {
  return (
    <>

<div className=" Home mb-3 ">

<div className='container w-85 text-center p-5 '>
<h1 className='text-light welcome'>Welcome to Edatechpoint Gis & Surveying!</h1>
<p className='text-light mt-5 expe'>We offer an assortment of quality services to build and preserve the results image of your documents needed. Our dedicated and experienced professionals specialize in communication of need, Land marketing and Real Estate management.
<br /><br />
Follow the link below to download our portfolio. 
<br /><br />
Contact us at email:- <a href="mailto:edatechpointgissurveying@gmail.com" className="text-light">edatechpointgissurveying@gmail.com</a> for a free consultation.
<br /><br />
 We look forward to hearing from you!</p>
</div>
    </div>


<div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/proper.webp" className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
        <h5>Precision Mapping</h5>
        <p>"Ensure the success of your project with our Precision Mapping services. We deliver highly accurate and detailed maps that are essential for effective planning and development."</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/cde.webp" className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
        <h5>Boundary Surveys</h5>
        <p>"Resolve property disputes and establish clear property lines with our expert Boundary Surveys. Our detailed reports will give you the peace of mind you need."</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/surv3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
        <h5>Topographic Surveys</h5>
        <p>"Optimize your construction plans with our Topographic Surveys. We offer comprehensive surveys that map out the contours and features of your land."</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/proper.webp" className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
        <h5>Property Valuation</h5>
        <p>"Get an accurate and reliable Property Valuation with our expert real estate services. Whether you’re buying, selling, or investing, we provide assessments you can trust."        </p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Home
