import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

function Home() {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <ul className="PannellumPageListBox">
        <li className="PannellumPageList">
          <Link to="/KrpanoHook">KrpanoHook</Link>
        </li>
        <li className="PannellumPageList">
          <Link to="/Krpanopage">Krpanopage</Link>
        </li>
        <li className="PannellumPageList">
          <Link to="/PannellumPage">PannellumPage</Link>{' '}
        </li>
      </ul>
    </div>
  );
}

export default Home;
