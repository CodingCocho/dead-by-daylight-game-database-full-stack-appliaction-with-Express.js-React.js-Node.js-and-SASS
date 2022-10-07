import './styles/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {AgeConfirmation} from '../pages/AgeConfirmation';
import {Home} from '../pages/Home';
import {Killer} from '../pages/Killer';
import {Survivor} from '../pages/Survivor';
import {Killers} from '../pages/Killers';
import {Survivors} from '../pages/Survivors';
import {useEffect,useState} from 'react';
import axios from 'axios';



function App() {
  document.body.classList.add('body-styling');  
  
const [backendData, setBackendData] = useState([]);

useEffect(()=>
{
    axios.get('http://localhost:8080/survivors')
      .then((response) => 
      {
        setBackendData(response.data)
      })
      .catch(err => console.log(err));
}, [])
 
console.log("hello");
console.log(backendData);
return (

    
    <div 
    className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route
          element={<AgeConfirmation />}
          path="/"
          >
          </Route>
          <Route
          element={<Home />}
          path="/home"
          >
          </Route>
          <Route
          element={<Killers />}
          path="/killers"
          >
          </Route>
          <Route
          element={<Killer />}
          path="/killers/:killerId"
          >
          </Route>
          <Route
          element={<Survivors />}
          path="/survivors"
          >
          </Route>
          <Route
          element={<Survivor />}
          path="/survivors/:survivorId"
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
