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
            <p data-aos="fade-up" style={{color: 'white', textAlign: 'center', marginLeft: '10em', marginRight: '10em', marginBottom: '10em', marginTop: '3em', fontSize: '1.5em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
        </section>
    </>
  )
}
