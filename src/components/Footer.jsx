import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

<footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Your Company Name</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.</p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><Link to="/" className="text-light" style={{ textDecoration: 'none' }}>Home</Link></p>
            <p><Link to="/" className="text-light" style={{ textDecoration: 'none' }}>About Us</Link></p>
            <p><Link to="/" className="text-light" style={{ textDecoration: 'none' }}>Services</Link></p>
            <p><Link to="/" className="text-light" style={{ textDecoration: 'none' }}>Contact</Link></p>
          </div>

          {/* 
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Services</h5>
            <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Residential Real Estate</a></p>
            <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Commercial Real Estate</a></p>
            <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Land Surveying</a></p>
            <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Property Management</a></p>
          </div> 
          */}
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> 123 Main St, Anytown, USA</p>
            <p><i className="fas fa-envelope mr-3"></i> info@yourcompany.com</p>
            <p><i className="fas fa-phone mr-3"></i> +1 234 567 890</p>
            <p><i className="fas fa-print mr-3"></i> +1 234 567 891</p>
          </div>
        </div>
        
        <hr className="mb-4"/>
        
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">© 2024 Your Company Name. All Rights Reserved.</p>
          </div>
          
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-light" style={{ fontSize: '23px' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer