import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

<footer className="bg-light text-dark pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Edatechpont</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.</p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>Home</Link></p>
            <p><Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>About Us</Link></p>
            <p><Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>Services</Link></p>
            <p><Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>Contact</Link></p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> 123 Main St, Anytown, USA</p>
            <p><i className="fas fa-envelope mr-3"></i> info@Edatechpoint.com</p>
            <p><i className="fas fa-phone mr-3"></i> +1 234 567 890</p>
            <p><i className="fas fa-print mr-3"></i> +1 234 567 891</p>
          </div>
        </div>
        
        <hr className="mb-4"/>
        
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">© 2024 Edatechpoint. All Rights Reserved.</p>
          </div>
          
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-facebook-f"><img src="/images/facbook.svg" alt="" /></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-twitter"><img src="/images/twitter.svg" alt="" /></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-google-plus-g"><img src="/images/gmail.svg" alt="" /></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-linkedin-in"><img src="/images/linkedin.svg" alt="" /></i>
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
