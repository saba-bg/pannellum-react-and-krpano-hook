import React, {useState} from 'react';
import {Pannellum, PannellumVideo} from 'pannellum-react';
import myImage from '../assets/images/milan.jpg';
import myImage1 from '../assets/images/wallpaperflare.com_wallpaper.jpg';
import myImage2 from '../assets/images/wallpaperflare.com_wallpaper1.jpg';
import myVideo from '../assets/images/Empyre - Cut To The Core (Acoustic) - 360 Degree Edition.webm';
import {Switch, Route, Link, useHistory} from 'react-router-dom';

function PannellumPage() {
  const [im, setIm] = useState(1);
  let history = useHistory();
  function handleClick() {
    history.push('/');
  }
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <ul className="PannellumPageListBox">
        <li className="PannellumPageList">
          <Link to="/PannellumPage/PannellumList">PannellumList</Link>
        </li>
        <li className="PannellumPageList">
          <Link to="/PannellumPage/PropsPannellum">PropsPannellum</Link>
        </li>
        <li className="PannellumPageList">
          <Link to="/PannellumPage/MapPannellum">MapPannellum</Link>{' '}
        </li>
      </ul>
      <button
        className="BackBtn"
        style={{marginTop: '30px'}}
        onClick={handleClick}
      >
        back
      </button>
    </div>
  );
}

export default PannellumPage;
const images = [myImage, myImage1, myImage2];
