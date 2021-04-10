import logo from './logo.svg';
import './App.css';
import Krpanopage from './Krpanopage';
import KrpanoHook from './KrpanoHook';
import PannellumPage from './Pannellum/PannellumPage';
import Home from './Home';
import PannellumList from './Pannellum/PannellumList';
import MapPannellum from './Pannellum/MapPannellum';
import PropsPannellum from './Pannellum/PropsPannellum';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Krpanopage" component={Krpanopage} />
        <Route exact path="/KrpanoHook" component={KrpanoHook} />
        <Route exact path="/PannellumPage" component={PannellumPage} />
        <Route
          exact
          path="/PannellumPage/PannellumList"
          component={PannellumList}
        />
        <Route
          exact
          path="/PannellumPage/PropsPannellum"
          component={PropsPannellum}
        />
        <Route
          exact
          path="/PannellumPage/MapPannellum"
          component={MapPannellum}
        />
      </Switch>
    </div>
  );
}

export default App;
