import './styles/Killers.css';
import axios from 'axios';
import {addKillers} from '../utilities/Killerslice';
import {useEffect, useState} from 'react';
import {Character} from '../components/Character';
import {Navbar} from '../components/Navbar';
import{useDispatch,useSelector} from 'react-redux';


export const Killers = () =>
{
    const dispatch = useDispatch();
    const myKillers = useSelector(state => state.killers.killers)
    const fetchedKillers = useSelector(state => state.killers.fetched)
    const [killers, setKillers] = useState([])

    const fetchKillers = async () =>
    {
        try
        {
            const killerResponse = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/killers');
            setKillers(killerResponse.data.data);
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
        if(!fetchedKillers)
        {
          fetchKillers();
        }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      , [])

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