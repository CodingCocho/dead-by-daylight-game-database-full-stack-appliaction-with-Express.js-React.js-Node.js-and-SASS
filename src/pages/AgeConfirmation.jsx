import {useRef,useState} from 'react';
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

    const verifyAge = () =>
    {
        let inputMonth = monthRef.current.value;
        let inputDay = dayRef.current.value;
        let inputYear  = yearRef.current.value;

        let currentDate = new Date();

        if(inputMonth < 0 || inputMonth > 12)
        {
            return false;
        }
        else if(inputDay < myMap.get(inputMonth) || inputDay > myMap.get(inputMonth))
        {
            return false;
        }
        else if(inputYear < 0 || inputYear > 2022)
        {
            return false 
        }
        else if(((currentDate.getMonth() + 1) - inputMonth) >= 0)
        {
            if(currentDate.getDate() - inputDay >= 0)
            {
                if(currentDate.getFullYear() - inputYear >= 18)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        else 
        {
            return false;
        }
    }

    const goToHome = () =>
    {
        console.log(verifyAge())
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
            onClick={goToHome}
            >
                Enter
            </button>
        </div>
    )
}