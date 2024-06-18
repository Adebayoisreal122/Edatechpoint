import React from 'react'

function Contact() {
  return (
    <>
      <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h5>Get in Touch</h5>
          <p>Edatechpoint Gis & Surveying is committed to exceeding your needs. Questions, comments or special requests? We’d love to hear from you, so don’t hesitate to reach out today.</p>
          <p><i className="fas fa-home mr-3"></i> 123 Main St, Anytown, USA</p>
          <p><i className="fas fa-envelope mr-3"></i><a href="mailto:edatechpointgissurveying@gmail.com" className="text-warning">edatechpointgissurveying@gmail.com</a></p>
          <p><i className="fas fa-phone mr-3"></i> +1 234 567 890</p>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Contact
