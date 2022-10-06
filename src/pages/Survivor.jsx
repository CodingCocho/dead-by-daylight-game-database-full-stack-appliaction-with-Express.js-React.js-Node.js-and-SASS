/* eslint-disable array-callback-return */
import './styles/Survivor.css';
import axios from 'axios';
import {addSurvivors} from '../utilities/Survivorslice';
import {useEffect, useState} from 'react';
import {Navbar} from '../components/Navbar';
import{useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'



export const Survivor = () =>
{

    const dispatch = useDispatch();
    const params = useParams();
    const [survivors, setSurvivors] = useState([]);
    const [pageSurvivor, setPageSurvivor] = useState({});
    const [perks, setPerks] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchSurvivor = async () =>
    {
        try
        {
            const survivorResponse = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/survs');
            const perksResponse = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/perks/surv');

            setSurvivors(survivorResponse.data.data);
            setPerks(perksResponse.data.data);
            setPageSurvivor(survivorResponse.data.data[params.survivorId]);
            setLoading(true)
        }
        catch(err)
        {
            alert(err.message)
        }
    }

    if(survivors.length)
    {
        dispatch(addSurvivors(survivors))
    }

    useEffect(() => 
    {
        fetchSurvivor();
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      , [])
console.log(perks)
    return (
        <div 
        className="Survivor"
        >
            <Navbar />
            <div 
            className="page"
            >
                {
                    loading &&
                    <div 
                    className="image-container"
                    >
                        <img  
                        alt="killer" 
                        src={pageSurvivor.imgs.store}
                        />
                    </div>
                    }
                    {
                    loading &&
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
                    }
            </div>
        </div>
    )
}