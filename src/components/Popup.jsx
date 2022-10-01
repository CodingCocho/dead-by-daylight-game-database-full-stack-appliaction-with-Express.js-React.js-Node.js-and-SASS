import './styles/Popup.css';

export const Popup = () =>
{

    const closePopup = () =>
    {
        const component = document.getElementById('popup-component');
        component.style.display = 'none';
       console.log(component);
    }

    return (
        <div 
        className="Popup"
        id="popup-component"
        >
            <div 
            className="responsive-component"
            >
                <i 
                class="fa-solid fa-x"
                onClick={closePopup}
                >    
                </i>
                <h2>Invalid Age</h2>
            </div>
        </div>
    )
}