import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>

          <Route path="/details/:countryName">
              <CountryDetails></CountryDetails>
          </Route>

          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route path="*">
              <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
