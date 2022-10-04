import './styles/Home.css'
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Navbar} from '../components/Navbar';
import Ghostface from '../images/ghost-face-lore-ii.png';
import YuJinLee from '../images/yun-jin-lee-lore-art.jfif';
import YuiKimura from '../images/yui-kimura-lore-i.png';
import Artist  from '../images/the-artist-lore-art.png';



export const Home = () =>
{

  const getKillers = async () =>
  {
      const apiResponse = await axios.get('https://thingproxy.freeboard.io/fetch/ https://dead-by-api.herokuapp.com/api/survs');
      console.log(apiResponse.data)
  }

  const getSurvirvors = async () =>
  {
      
  }

  useEffect(() => {
     getKillers();
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
              <p 
              className='header'
              >
                  Welcome to
              </p>
              <p 
              className='header'
              >
                  Dead By Daylight
              </p>
              <div 
              className="grid"
              >
                <img 
                alt="the-ghost-face" 
                src={Ghostface} 
                />
                <img 
                alt="yu-jin-lee" 
                src={YuJinLee} 
                />
                <p>
                  Take a look
                </p>
                <p>
                  We dare you
                </p>
              </div>
              <div 
              className="grid"
              >
                <img 
                alt="the-ghost-face" 
                src={Artist} 
                />
                <img 
                alt="yu-jin-lee" 
                src={YuiKimura} 
                />
                <p>
                  Death is not
                </p>
                <p>
                  An Escape
                </p>
              </div>
              <p
              className='header-2'
              >
                Check out these featured members
              </p>
              <div 
              className="image-row"
              >
                <div 
                className="background">
                  <img 
                  alt="ceno-bite" 
                  src="https://deadbydaylight.com/static/a42372001611a416085ed6290b4e8479/ea014/DBD_Killer_Pinhead_only_4c4626fd0c.webp" 
                  />
                </div>
                <div 
                className="background">
                  <img 
                  alt="detective-tapp"
                  src="https://deadbydaylight.com/static/1cd51fbdf2a23db9a1f73720e49662d4/1b615/DBD_Survivor_David_Tapp_only_372da5fad1.webp"  
                  />
                </div>
                <div 
                className="background">
                  <img 
                  alt="huntress" 
                  src="https://deadbydaylight.com/static/f00176036126f7f53d2944c863882ab9/e3912/DBD_Killer_Huntress_only_7510a188be.webp" 
                  />
                </div>
                <div 
                className="background">
                  <img 
                  alt="ash" 
                  src="https://deadbydaylight.com/static/f864b1820f2137a46144a3c46c533011/0fb44/DBD_Survivor_Ash_only_03e2a515fa.webp" 
                  />
                </div>
              </div>
            </section>
            <section 
            className="mobile-page"
            >

            </section>
        </div>
    )
}