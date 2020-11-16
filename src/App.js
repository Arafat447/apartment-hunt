import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './components/Login/Login';
import HouseDetails from './pages/HouseDetails/HouseDetails';
import { createContext } from 'react';
import useLocalStorageState from 'use-local-storage-state/dist';

export const SelectedHouseContext = createContext([])

function App() {
  const [selectedHouse, setSelectedHouse] = useLocalStorageState('selectedHouse', {});
  return (
    <SelectedHouseContext.Provider value={[selectedHouse, setSelectedHouse]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/house'>
            <HouseDetails />
          </Route>
        </Switch>
      </Router>
    </SelectedHouseContext.Provider>
  );
}

export default App;
