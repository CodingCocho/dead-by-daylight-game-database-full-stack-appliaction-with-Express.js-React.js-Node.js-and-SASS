import './styles/Survivors.css';
import {Character} from '../components/Character';
import {Navbar} from '../components/Navbar';
import{useSelector} from 'react-redux';


export const Survivors = () =>
{
    const mySurvivors = useSelector(state => state.survivors.survivors);

    return (
        <div 
        className="Survivors"
        >
            <Navbar />
            <section 
            className="page">
                <div 
                className="mobile-grid"
                id="survivor-grid"
                >
                    {mySurvivors.map((survivor, index) =>
                    {
                        return (
                            <Character 
                            id={index}
                            imgUrl={survivor.imgs.portrait}
                            isKiller={false}
                            name={survivor.name}
                            />
                        )
                    })}
                </div>
                <div 
                className="desktop-grid"
                >
                    {mySurvivors.map((survivor, index) =>
                    {
                        return (
                            <Character 
                            id={index}
                            imgUrl={survivor.imgs.portrait}
                            isKiller={false}
                            name={survivor.name}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}