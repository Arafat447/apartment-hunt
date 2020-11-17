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
import Dashboard from './pages/Dashboard/Dashboard';

export const SelectedHouseContext = createContext([]);
export const UserContext = createContext([]);

function App() {
  const [selectedHouse, setSelectedHouse] = useLocalStorageState('selectedHouse', {});
  const [loggedInUser, setLoggedInUser] = useLocalStorageState('loggedInUser', {
    isSignedIn: false,
    name: '',
    email: '',
    image: ''
  })

  return (
    <SelectedHouseContext.Provider value={[selectedHouse, setSelectedHouse]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path='/house'>
              <HouseDetails />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </SelectedHouseContext.Provider>
  );
}

export default App;
