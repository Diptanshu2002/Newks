import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Cardfeed from './cardfeed'

export default function NewsFeed() {
  return (
    <div>
        <Navbar pagename="feed"/>
        <div className='container d-inline-flex' style={{color:'4FFFF4'}}>
            <div className='pop'>
              <h2 style={{color: '#4ffff4', marginLeft: '-500px' , letterSpacing: '-14px', fontSize: '100px', fontFamily: 'Arimo'}}>NewKS</h2>
            </div>

            <form className="mx-auto d-flex my-auto" style={{width:'600px'}}>
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" style={{borderRadius:'10px', backgroundColor: '#242424', marginLeft: '-350px'}}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{borderRadius:'10px'}}>Search</button>
            </form>
        </div>
        <div className="container d-flex">
            <div id="" style={{overflow:'scroll',maxHeight: '530px', width:'700px', marginRight: '60px', backgroundColor: '#383737', borderRadius: '8px', overflowX: 'hidden', padding: '30px'}}>
                <Cardfeed/>
               
            </div>
            <div id="" style={{overflow:'scroll',maxHeight: '530px', width: '700px', backgroundColor: '#242424', borderRadius: '8px', overflowX: 'hidden', padding: '30px'}}>
                <Cardfeed/>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}
