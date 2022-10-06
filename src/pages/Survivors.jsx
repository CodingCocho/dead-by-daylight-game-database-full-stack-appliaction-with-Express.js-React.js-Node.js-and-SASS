import './styles/Survivors.css';
import axios from 'axios';
import {addSurvivors} from '../utilities/Survivorslice';
import {useEffect, useState} from 'react';
import {Character} from '../components/Character';
import {Navbar} from '../components/Navbar';
import{useDispatch,useSelector} from 'react-redux';;


export const Survivors = () =>
{
    const dispatch = useDispatch();
    const mySurvivors = useSelector(state => state.survivors.survivors);
    const fetchedSurvivors = useSelector(state => state.survivors.fetched);
    const [survivors, setSurvivors] = useState([]);

    const fetchSurvivors = async () =>
    {
        try
        {
            const survsResponse = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/survs');
            setSurvivors(survsResponse.data.data);
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
        if(!fetchedSurvivors)
        {
          fetchSurvivors();
        }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      , [])

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