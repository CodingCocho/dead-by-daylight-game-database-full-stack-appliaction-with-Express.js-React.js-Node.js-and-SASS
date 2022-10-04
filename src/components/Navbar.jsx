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
        // Mobile menu is in open state
        if(redMori.style.display === 'none')
        {
            // Close mobile menu
            redMori.style.display = 'block';
            yellowMori.style.display = 'none';
            mobileMenu.style.display = 'none';
        }
        // Mobile menu is in close state
        else
        {
            // Open mobile menu
            redMori.style.display = 'none';
            yellowMori.style.display = 'block';
            mobileMenu.style.display = 'flex';
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
                    >
                        Killers
                    </Link>
                    <Link
                    className='desktop-link'
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
                    >
                        Killers
                    </Link>
                    <Link
                    className='drop-down-link'
                    >
                        Survivors
                    </Link>
               </div>
            </section>
        </div>
    )
}