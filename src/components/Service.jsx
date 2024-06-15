import React from 'react'

function Service() {
  return (
    <>
      <div className="container py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/400" className="card-img-top" alt="Residential Real Estate" />
            <div className="card-body">
              <h5 className="card-title">Residential Real Estate</h5>
              <p className="card-text">
                We help you find the perfect home. Our expert agents are here to guide you through every step of the process.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/400" className="card-img-top" alt="Commercial Real Estate" />
            <div className="card-body">
              <h5 className="card-title">Commercial Real Estate</h5>
              <p className="card-text">
                Whether you are looking to buy, sell, or lease commercial properties, we have the expertise to assist you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/400" className="card-img-top" alt="Land Surveying" />
            <div className="card-body">
              <h5 className="card-title">Land Surveying</h5>
              <p className="card-text">
                Our professional land surveying services ensure accurate and reliable results for your property needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Service
