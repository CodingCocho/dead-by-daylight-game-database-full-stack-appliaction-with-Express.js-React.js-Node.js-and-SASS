/* eslint-disable array-callback-return */
import './styles/Survivor.css';
import {Navbar} from '../components/Navbar';
import{useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'



export const Survivor = () =>
{

    const params = useParams();
    const pageSurvivor = useSelector(state => state.survivors.survivors[params.survivorId]);
    const perks = useSelector(state => state.survivors.perks)

   

 
console.log(perks)
    return (
        <div 
        className="Survivor"
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
                        src={pageSurvivor.imgs.store}
                        />
                    </div>
                 
                    <div 
                    className="flex-container"
                    >
                        <p 
                        className="full-name"
                        >
                            {pageSurvivor.name}
                        </p>
                        <p 
                        className="name"
                        >
                            {pageSurvivor.role}
                        </p>
                        <p 
                        className="lore">
                            Lore
                        </p>
                        <p 
                        className="backstory"
                        >
                            {pageSurvivor.backstory}
                        </p>
                        
                        <div 
                        className="perks"
                        >
                            {perks.map((perk, index) =>
                            {
                                for(let counter =0; counter < pageSurvivor.perks_ids.length; counter++)
                                {
                                    if(pageSurvivor.name === perk.survivorName)
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
                        className="overview"
                        >
                            {pageSurvivor.overview}
                        </p>
                    </div>
            </div>
        </div>
    )
}