import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'


export default function Navbar(props) {
  const { user } = useAuthContext()
  const name = user.email.split('@')
  
  const {logout} = useLogout()
  function handleClick(){
      logout();
  }

  return (
    <div>
      {/* <button onClick={handleClick}>logOut</button>
      <span>{name[0]}</span> */}
      <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#363333'}}>
  <div className="container-fluid">
    <div className=''>
        <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3431 18.1439L6.6323 22.0126V29H0.276561V1.36635H6.6323V14.2752L18.8701 1.36635H25.9759L14.5276 13.6831L26.647 29H19.1859L10.3431 18.1439ZM31.2889 29.4737C29.1045 29.4737 26.9859 29.1842 24.9331 28.6052C22.9066 27.9999 21.2749 27.2236 20.038 26.2761L22.2092 21.46C23.3935 22.3284 24.8015 23.0259 26.4332 23.5522C28.0649 24.0786 29.6966 24.3418 31.3283 24.3418C33.1443 24.3418 34.4865 24.0786 35.3549 23.5522C36.2234 22.9996 36.6577 22.2758 36.6577 21.381C36.6577 20.7231 36.3945 20.1836 35.8681 19.7625C35.3681 19.3151 34.7102 18.9598 33.8943 18.6966C33.1048 18.4334 32.0258 18.1439 30.6572 17.8281C28.5518 17.3281 26.828 16.828 25.4858 16.328C24.1436 15.828 22.9856 15.0253 22.0118 13.9199C21.0644 12.8146 20.5907 11.3408 20.5907 9.49854C20.5907 7.89316 21.0249 6.44568 21.8934 5.15611C22.7619 3.84022 24.0646 2.80067 25.8016 2.03745C27.5649 1.27424 29.7098 0.892633 32.2363 0.892633C33.9996 0.892633 35.7234 1.10317 37.4077 1.52426C39.0921 1.94534 40.5659 2.55065 41.8291 3.34018L39.8553 8.19581C37.3025 6.74833 34.7496 6.0246 32.1968 6.0246C30.4072 6.0246 29.0782 6.31409 28.2097 6.89308C27.3675 7.47207 26.9464 8.23529 26.9464 9.18273C26.9464 10.1302 27.4333 10.8407 28.4071 11.3145C29.4071 11.7619 30.9204 12.2093 32.9469 12.6567C35.0523 13.1567 36.7761 13.6567 38.1183 14.1568C39.4605 14.6568 40.6053 15.4464 41.5528 16.5254C42.5265 17.6044 43.0134 19.065 43.0134 20.9073C43.0134 22.4864 42.566 23.9338 41.6712 25.2497C40.8027 26.5393 39.4868 27.5657 37.7235 28.3289C35.9603 29.0921 33.8154 29.4737 31.2889 29.4737Z" fill="white"/>
        </svg>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" style={{fontSize: '20px'}}>

        <li className="nav-item hover-underline-animation">
          <Link className="nav-link active" style={{color: 'white'}} aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item hover-underline-animation">
          <Link className="nav-link" style={{color: 'white'}} to="/feed">Feed</Link>
        </li>

        <li className="nav-item hover-underline-animation">
          <Link className="nav-link " style={{color: 'white'}} to='/stockswiki'>Stock-Wiki</Link>
        </li>

      </ul>
      <form className="d-flex">
        <h6 className="me-2" onClick={handleClick} style={{color: 'white',
          border: '2px solid White',
          padding:'5px 10px',
          cursor : 'pointer'}}>Logout</h6>


        {/* <h5 className="me-2" style={{color: 'white'}}>{props.pagename}</h5> */}
      </form>
    </div>
  </div>
</nav>
</>
    </div>
  )
}
