import React, { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import person from './user.jpg'

import Cards from './cards';

export default function Abtweb() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
  return (
      <>
    <section>
        <h1 id='about' data-aos="fade-up" style={{color: 'white', textAlign: 'center', fontSize: '5em', marginTop: '-500px'}}>ABOUT WEBSITE</h1>
        <div className='grids'>
            <p data-aos="fade-up" style={{color: 'white', textAlign: 'center', marginLeft: '10em', marginRight: '10em', marginBottom: '10em', marginTop: '3em', fontSize: '1.5em'}}>Newks is a news aggregator which scrapes twitter and google news to get the latest updates about any stock so that you can make an informed decision. No need to listen to your friend's reliable "just trust me bro" sources.</p>
        </div>
    </section>
    <section className="teams">
            <h1 className="heading" style={{color: 'white'}}><strong>MEET OUR TEAM</strong></h1>
            <div className="gallery">
                <div className="single-pair">
                    <div data-aos="fade-up" className="pairs">
                        <Cards user={person} name="Name" desig="Designation" tagline="Tagline" linkedin="https://linkedin.com" github="https://github.com" insta="https://instagram.com"/>
                        <Cards user={person} name="Name" desig="Designation" tagline="Tagline" linkedin="https://linkedin.com" github="https://github.com" insta="https://instagram.com"/>    
                    </div>
                </div>
                <div className="single-pair">
                    <div data-aos="fade-up" className="pairs">
                        <Cards user={person} name="Name" desig="Designation" tagline="Tagline" linkedin="https://linkedin.com" github="https://github.com" insta="https://instagram.com"/>
                        <Cards user={person} name="Name" desig="Designation" tagline="Tagline" linkedin="https://linkedin.com" github="https://github.com" insta="https://instagram.com"/>    
                    </div>
                </div>
            </div>
            <div style={{height:'30px'}}></div>
        </section>
    </>
  )
}
