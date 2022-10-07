import './styles/Character.css';
import { Link } from "react-router-dom";

export const Character = (props) =>
{
    const {id, imgUrl, isKiller, name} = props;

    return (
        <Link 
        className="Character"
        to={isKiller ? `/killers/${id}` : `/survivors/${id}`}
        >
            <section 
            className="component"
            >
                <img 
                alt="character"
                src={imgUrl}
                 />
                 <div 
                className="overlay-block">
                    {name}
                 </div>
            </section>
            
        </Link>
    )
}