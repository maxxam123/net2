import './app.scss';
import Home from './pages/home/Home';
// import Login from './pages/login/Login';
// import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
// import Register from './pages/register/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
