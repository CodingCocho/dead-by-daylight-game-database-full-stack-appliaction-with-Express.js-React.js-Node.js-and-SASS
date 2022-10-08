import './styles/Killers.css';
import {Character} from '../components/Character';
import {Navbar} from '../components/Navbar';
import{useSelector} from 'react-redux';


export const Killers = () =>
{
    const myKillers = useSelector(state => state.killers.killers)
 
    return (
        <div 
        className="Killers"
        >
            <Navbar />
            <section 
            className="page">
                <div 
                className="mobile-grid"
                id="killer-grid"
                >
                    {myKillers.map((killer, index) =>
                    {
                        return (
                            <Character 
                            id={index}
                            imgUrl={killer.imgs.portrait}
                            isKiller={true}
                            name={killer.name}
                            />
                        )
                    })}
                </div>
                <div 
                className="desktop-grid"
                >
                    {myKillers.map((killer, index) =>
                    {
                        return (
                            <Character 
                            id={index}
                            imgUrl={killer.imgs.portrait}
                            isKiller={true}
                            name={killer.name}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}