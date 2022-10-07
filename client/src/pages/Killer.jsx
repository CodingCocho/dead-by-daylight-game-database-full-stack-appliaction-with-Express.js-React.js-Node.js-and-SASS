/* eslint-disable array-callback-return */
import './styles/Killer.css';
import axios from 'axios';
import {addKillers} from '../utilities/Killerslice';
import {useEffect, useState} from 'react';
import {Navbar} from '../components/Navbar';
import{useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'

export const Killer = () =>
{

    const dispatch = useDispatch();
    const params = useParams();
    const [killers, setKillers] = useState([]);
    const [pageKiller, setPageKiller] = useState({});
    const [perks, setPerks] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchKiller = async () =>
    {
        try
        {
            const killerResponse = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/killers');
            const perksResponse = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/perks/killer');

            setKillers(killerResponse.data.data);
            setPerks(perksResponse.data.data);
            setPageKiller(killerResponse.data.data[params.killerId]);
            setLoading(true)
        }
        catch(err)
        {
            alert(err.message)
        }
    }

    if(killers.length)
    {
        dispatch(addKillers(killers))
    }

    useEffect(() => 
    {
        fetchKiller();
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      , [])

    return (
        <div 
        className="Killer"
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
                            src={pageKiller.imgs.store}
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
                     }
                </div>
        </div>
    )
}