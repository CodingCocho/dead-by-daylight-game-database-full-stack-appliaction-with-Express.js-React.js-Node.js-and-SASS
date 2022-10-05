import './styles/Character.css';

export const Character = (props) =>
{
    const {imgUrl, name} = props;

    return (
        <div 
        className="Character"
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
            
        </div>
    )
}