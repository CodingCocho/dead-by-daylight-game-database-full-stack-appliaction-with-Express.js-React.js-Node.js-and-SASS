import './styles/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {AgeConfirmation} from '../pages/AgeConfirmation';
import {Home} from '../pages/Home';

function App() {



  document.body.classList.add('body-styling');
  
  
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
