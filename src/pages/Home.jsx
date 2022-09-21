import './styles/Home.css'
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Navbar} from '../components/Navbar';



export const Home = () =>
{


  useEffect(() => {
    }
  , [])
  

    return (
        <div 
        className="Home"
        >
            <Navbar />
            <section 
            className="desktop-page"
            >
                
            </section>
            <section 
            className="mobile-page"
            >

            </section>
        </div>
    )
}