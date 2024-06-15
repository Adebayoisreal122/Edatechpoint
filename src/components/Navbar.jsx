import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
    const navLinks = [
        {
          name: "Contact us",
          path: "/ContactUs",
          
        },
        {
          name: "About us",
          path: "/AboutUs"
        },
        {
          name: "Our services",
          path: "/OurServices",
          
        },
      
    ]
  return (
    <>
    

<nav className="navbar navbar-expand-lg border border-bottom border-body p-1 bg-primary">
  <div className="container-fluid">
    <Link to={"/"} className=" d-flex gap-2 navbar-brand">
      <img src="/images/edalogo.png"  style={{ height: '60px', width: '100px' }} alt="" />
      <h4 className='my-auto'>EDATECHPOINT</h4></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  justify-content-center navbar-collapse" id="navbarText">
      
    <div className="d-flex navbar-nav gap-3" >
    {
                navLinks.map((data, i) => {
                    return (
                        <div key={i}>
                            <NavLink className={({ isActive }) => (isActive ? "text-info fw-bolder underline" : "text-dark text-decoration-none")} to={data.path}>{data.name}
</NavLink>
                        </div>
                    );
                  })
                }
                </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
