import './styles/App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {AgeConfirmation} from '../pages/AgeConfirmation';
import {Home} from '../pages/Home';

function App() {


  // const getFelix = async () =>
  // {
  //   try
  //   {
  //       const apiResponse = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/survs/felixrichter?fields=name,role,perks_names,imgs');
  //       console.log(apiResponse.data.data[0]);
  //       setFelix(apiResponse.data.data[0]);
  //       setLoading(true);
  //   }
  //   catch(err)
  //   {
  //       alert(err.message);
  //   }
  // }

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
