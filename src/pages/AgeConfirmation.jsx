import {useRef,useState} from 'react';
import './styles/AgeConfirmation.css';

export const AgeConfirmation = () =>
{

    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);

    const [day,setDay] = useState('');
    const [month,setMonth] = useState('');
    const [year,setYear] = useState('');


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
            setDay(inputDay);
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
            setMonth(inputMonth);
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
            setYear(inputYear);
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
            className="desktop-grid-container"
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
            >
                Enter
            </button>
        </div>
    )
}