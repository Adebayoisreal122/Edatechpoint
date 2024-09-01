import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);}

  return (
    <>

<footer className="bg-light text-dark pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Edatechpont</h5>
            <p>We offer an assortment of quality services to build and preserve the results image of your documents needed. Our dedicated and experienced professionals specialize in communication of need, Land marketing and Real Estate management.

Contact us at email:-<a href="mailto:edatechpointgissurveying@gmail.com" className="text-warning">edatechpointgissurveying@gmail.com</a> for a free consultation.

 We look forward to hearing from you!</p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
  <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
  <p><Link to="/" className="text-dark" style={{ textDecoration: 'none' }} onClick={scrollToTop}>Home</Link></p>
  <p><Link to="/AboutUs" className="text-dark" style={{ textDecoration: 'none' }} onClick={scrollToTop}>About Us</Link></p>
  <p><Link to="/OurServices" className="text-dark" style={{ textDecoration: 'none' }} onClick={scrollToTop}>Services</Link></p>
  <p><Link to="/ContactUs" className="text-dark" style={{ textDecoration: 'none' }} onClick={scrollToTop}>Contact</Link></p>
</div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i>Plot 1 Adetoun Balogun street <br />Behind Ideal supermarket <br />Bogjie bus stop Ibeju-lekki Lagos</p>
            <p><i className="fas fa-envelope mr-3"></i> Adekoyaemmanuel2020@gmail.com  <br />edatechpointgissurveying@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +2348153933758</p>
            <p><i className="fas fa-print mr-3"></i> +2348143490130</p>
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
