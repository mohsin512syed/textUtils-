import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.Title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.HomePage}</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/About">{props.AboutText}</a>
            </li> */}
          </ul>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2"onClick={()=>{props.toggleMode('primary')}} style={{ height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2"onClick={()=>{props.toggleMode('danger')}} style={{ height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2"onClick={()=>{props.toggleMode('success')}} style={{ height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2"onClick={()=>{props.toggleMode('warning')}} style={{ height:'30px',width:'30px', cursor:'pointer'}}></div>
      </div> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode}role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.proptype = {
  Title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  HomePage: PropTypes.string.isRequired,

}
Navbar.dafaultProps = {
  Title: "set title here",
  AboutText: "set text here",
  HomePage: " set information here",
};
