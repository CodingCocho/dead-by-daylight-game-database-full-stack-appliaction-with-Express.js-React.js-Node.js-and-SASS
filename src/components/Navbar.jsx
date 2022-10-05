import './styles/Navbar.css';
import HomeIcon from '../images/home-icon.png'
import RedMori from '../images/red-mori.png';
import YellowMori from '../images/yellow-mori.png';
import {Link} from 'react-router-dom';

export const Navbar = () =>
{
    
    const handleMobileMenu = () =>
    {
        const redMori = document.getElementById('open')
        const yellowMori = document.getElementById('close')
        const mobileMenu = document.getElementById('drop-down-menu')
        const mobileHeader1 = document.getElementById('mobile-header-1')
        const mobileHeader2 = document.getElementById('mobile-header-2')
        const mobileImage = document.getElementById('mobile-home-image')
        const killerMobileGrid = document.getElementById('killer-grid');
        const survivorMobileGrid = document.getElementById('survivor-grid');
        // Mobile menu is in open state
        if(redMori.style.display === 'none')
        {
            // Close mobile menu
            redMori.style.display = 'block';
            yellowMori.style.display = 'none';
            mobileMenu.style.display = 'none';
            if(mobileHeader1 && mobileHeader2 && mobileImage)
            {
                mobileHeader1.style.display = 'block';
                mobileHeader2.style.display = 'block';
                mobileImage.style.marginTop = '0px';
            }
            if(killerMobileGrid)
            {
                killerMobileGrid.style.paddingTop = '20px';
            }
            if(survivorMobileGrid)
            {
                survivorMobileGrid.style.paddingTop = '20px'
            }
        }
        // Mobile menu is in close state
        else
        {
            // Open mobile menu
            redMori.style.display = 'none';
            yellowMori.style.display = 'block';
            mobileMenu.style.display = 'flex';
            if(mobileHeader1 && mobileHeader2)
            {
                mobileHeader1.style.display = 'none';
                mobileHeader2.style.display = 'none';
                mobileImage.style.marginTop = '200px';
            }
            if(killerMobileGrid)
            {
                killerMobileGrid.style.paddingTop = '220px';
            }
            if(survivorMobileGrid)
            {
                survivorMobileGrid.style.paddingTop = '220px'
            }
        }
    }

    return (
        <div 
        className="Navbar"
        >
            <section 
            className="desktop-component"
            >
                <Link 
                className="left-flex-container"
                to="/home"
                >
                    <img 
                    alt="home-icon"
                    className="home-icon"
                    src={HomeIcon}  
                    />
                </Link>
                <div 
                className="right-flex-container"
                >
                    <Link
                    className='desktop-link'
                    to="/killers"
                    >
                        Killers
                    </Link>
                    <Link
                    className='desktop-link'
                    to="/survivors"
                    >
                        Survivors
                    </Link>
                </div>
            </section>
            <section 
            className="mobile-component"
            >
               <div 
               className="nav-container"
               >
                <img 
                alt="mori"
                className="mori-icon"
                id="open"
                onClick={handleMobileMenu}
                src={RedMori}  
                />
                <img 
                alt="mori"
                className="mori-icon"
                id="close"
                onClick={handleMobileMenu}
                src={YellowMori}  
                />
               </div>
               <div 
               className="drop-down-container"
               id="drop-down-menu"
               >
                    <Link
                    className='drop-down-link'
                    to="/home"
                    >
                        Home
                    </Link>
                    <Link
                    className='drop-down-link'
                    to="/killers"
                    >
                        Killers
                    </Link>
                    <Link
                    className='drop-down-link'
                    to="/survivors"
                    >
                        Survivors
                    </Link>
               </div>
            </section>
        </div>
    )
}