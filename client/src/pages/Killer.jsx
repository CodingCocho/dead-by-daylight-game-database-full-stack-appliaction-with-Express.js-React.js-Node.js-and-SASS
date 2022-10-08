/* eslint-disable array-callback-return */
import './styles/Killer.css';
import {Navbar} from '../components/Navbar';
import{useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'

export const Killer = () =>
{
    const params = useParams();
    const pageKiller = useSelector(state => state.killers.killers[params.killerId]);
    const perks = useSelector(state => state.killers.perks)

    return (
        <div 
        className="Killer"
        >
            <Navbar />
                <div 
                className="page"
                >
                        <div 
                        className="image-container"
                        >
                            <img  
                            alt="killer" 
                            src={pageKiller.imgs.store}
                            />
                        </div>
                        <div 
                        className="flex-container"
                        >
                            <p 
                            className="full-name"
                            >
                                {pageKiller.fullName}
                            </p>
                            <p 
                            className="name"
                            >
                                {pageKiller.name}
                            </p>
                            <p 
                            className="lore">
                                Lore
                            </p>
                            <p 
                            className="backstory"
                            >
                                {pageKiller.backstory}
                            </p>
                           
                            <div 
                            className="perks"
                            >
                                {perks.map((perk, index) =>
                                {
                                    for(let counter =0; counter < pageKiller.perks_ids.length; counter++)
                                    {
                                        if(pageKiller.perks_ids[counter] === perk.id)
                                        {
                                            return (
                                                <div 
                                                className="perk">
                                                    <img 
                                                    alt="perk"
                                                    src={perk.icon} 
                                                    />
                                                    <p 
                                                    className="perk-name"
                                                    >
                                                        {perk.name}
                                                    </p>
                                                    <div 
                                                    className="perk-description"
                                                    >
                                                        {perk.description}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }
                                })}
                            </div>
                            <p 
                            className="power"
                            >
                                Power: {pageKiller.power.powerName}
                            </p>
                            <p 
                            className="overview"
                            >
                                {pageKiller.overview}
                            </p>
                        </div>
                </div>
        </div>
    )
}