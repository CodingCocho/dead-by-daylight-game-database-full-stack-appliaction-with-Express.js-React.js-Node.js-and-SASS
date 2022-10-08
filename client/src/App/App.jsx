import './styles/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {AgeConfirmation} from '../pages/AgeConfirmation';
import {Home} from '../pages/Home';
import {Killer} from '../pages/Killer';
import {Survivor} from '../pages/Survivor';
import {Killers} from '../pages/Killers';
import {Survivors} from '../pages/Survivors';
import{useDispatch} from 'react-redux';
import {addSurvivors, addSurvivorPerks} from '../utilities/Survivorslice';
import {addKillers, addKillerPerks} from '../utilities/Killerslice';
import killers from '../api/killers.json';
import survivors from '../api/survivors.json';
import killerPerks from '../api/killersPerks.json';
import survivorPerks from '../api/survivorsPerks.json';



function App() {
  document.body.classList.add('body-styling');  
  
  const dispatch = useDispatch();
  
  dispatch(addSurvivors(survivors.data));
  dispatch(addSurvivorPerks(survivorPerks.data));
  dispatch(addKillers(killers.data));
  dispatch(addKillerPerks(killerPerks.data));

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
