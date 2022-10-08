import './styles/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {AgeConfirmation} from '../pages/AgeConfirmation';
import {Home} from '../pages/Home';
import {Killer} from '../pages/Killer';
import {Survivor} from '../pages/Survivor';
import {Killers} from '../pages/Killers';
import {Survivors} from '../pages/Survivors';
import {useEffect,useState} from 'react';
import{useDispatch} from 'react-redux';
import {addSurvivors, addSurvivorPerks} from '../utilities/Survivorslice';
import {addKillers, addKillerPerks} from '../utilities/Killerslice';
import axios from 'axios';



function App() {

  document.body.classList.add('body-styling');  
  
  const dispatch = useDispatch();
  const [survivorsData, setSurvivorsData] = useState([]);
  const [killersData, setKillersData] = useState([]);
  const [survivorsPerksData, setSurvivorsPerksData] = useState([]);
  const [killersPerksData, setKillersPerkData] = useState([]);

  useEffect(()=>
  {
      axios.get('http://localhost:8080/api/survivors')
        .then((response) => 
        {
          setSurvivorsData(response.data.data)
          axios.get('http://localhost:8080/api/killers')
          .then((response) => 
          {
            setKillersData(response.data.data)
            axios.get('http://localhost:8080/api/survivors/perks')
            .then((response) => 
            {
              setSurvivorsPerksData(response.data.data)
              axios.get('http://localhost:8080/api/killers/perks')
              .then((response) => 
              {
                setKillersPerkData(response.data.data)
              })
              .catch(err => console.log(err));
                  })
            .catch(err => console.log(err));
              })
          .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  }, [])

  if(survivorsData.length && survivorsPerksData.length && killersData.length && killersPerksData.length)
  {
    dispatch(addSurvivors(survivorsData));
    dispatch(addSurvivorPerks(survivorsPerksData));
    dispatch(addKillers(killersData));
    dispatch(addKillerPerks(killersPerksData));
  }
 
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
