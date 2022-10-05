import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Popup} from '../components/Popup';
import './styles/AgeConfirmation.css';

export const AgeConfirmation = () =>
{
    // Create map for month and day validation
    const myMap = new Map();
    myMap.set(1, 31)
    myMap.set(2, 28)
    myMap.set(3, 31)
    myMap.set(4, 30)
    myMap.set(5, 31)
    myMap.set(6, 30)
    myMap.set(7, 31)
    myMap.set(8, 31)
    myMap.set(9, 30)
    myMap.set(10, 31)
    myMap.set(11, 30)
    myMap.set(12, 31)

    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);

    const navigate = useNavigate();

    const updateDay = () =>
    {
        let inputDay = dayRef.current.value.trim();
        inputDay = inputDay.replace(/\s+/g, '');
        if(inputDay.length > 2)
        {
            dayRef.current.value = inputDay.substring(0,2);
        }
        else
        {
            dayRef.current.value = inputDay;
        }
    }

    const updateMonth = () =>
    {
        let inputMonth = monthRef.current.value.trim();
        inputMonth = inputMonth.replace(/\s+/g, '');
        if(inputMonth.length > 2)
        {
            monthRef.current.value = inputMonth.substring(0,2);
        }
        else
        {
            monthRef.current.value = inputMonth;
        }
    }

    const updateYear = () =>
    {
        let inputYear = yearRef.current.value.trim();
        inputYear = inputYear.replace(/\s+/g, '');
        if(inputYear.length > 4)
        {
            yearRef.current.value = inputYear.substring(0,4);
        }
        else
        {
            yearRef.current.value = inputYear;
        }
    }

    // Big O(1) to verify age
    const verifyAge = () =>
    {
        let inputMonth = monthRef.current.value - 1;
        let inputDay = dayRef.current.value;
        let inputYear  = yearRef.current.value;
        console.log(inputMonth);
        if(isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear))
        {
            return false;
        }
        if(!inputDay || !inputYear  || !(inputMonth+1))
        {
            return false;
        }
        const userDob = new Date(inputYear, inputMonth, inputDay); 
        const today = new Date();
        const validMinDate = new Date(today.getFullYear()-18, today.getMonth(), today.getDate(), today.getHours(), today.getMinutes());
        if(userDob > validMinDate)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    const goToHome = () =>
    {
        if(verifyAge())
        {
            navigate('/home')
        }
        else
        {
            const popup = document.getElementById('popup-component');
            popup.style.display = 'flex';
        }
    }

    return (
        <div 
        className="AgeConfirmation"
        >
            <p 
            className='header'
            title="header"
            >
                Confirm your age before entering
            </p>

            <div 
            className="grid-container"
            >
                <label 
                htmlFor="day" 
                className="input-label">
                    Day
                </label>
                
                <label 
                htmlFor="month" 
                className="input-label">
                    Month
                </label>
                
                <label 
                htmlFor="year" 
                className="input-label">
                    Year
                </label>

                <div className="input-container">
                    <input 
                    className="day-input" 
                    id="day"
                    name="day"
                    onChange={updateDay}
                    ref={dayRef}
                    type="text"  
                    />
                </div>

                <div className="input-container">
                    <input 
                    className="month-input" 
                    id="month"
                    name="month"
                    onChange={updateMonth}
                    ref={monthRef}
                    type="text"  
                    />
                </div>
                
                <div className="input-container">
                    <input 
                    className="year-input" 
                    id="year"
                    name="year"
                    onChange={updateYear}
                    ref={yearRef}
                    type="text"  
                    />
                </div>
            </div>

            <button 
            className="enter"
            onClick={goToHome}
            >
                Enter
            </button>
            <Popup />
        </div>
    )
}