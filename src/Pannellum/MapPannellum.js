/* global google */
import React, {useState} from 'react';
import Map from './Map';
import {useHistory} from 'react-router-dom';
import {Pannellum, PannellumVideo} from 'pannellum-react';
import myImage from '../assets/images/IMG-20210410-WA0007.jpg';
import myImage1 from '../assets/images/IMG-20210410-WA0006.jpg';
import myImage2 from '../assets/images/IMG-20210410-WA0008.jpg';
import myVideo from '../assets/images/Empyre - Cut To The Core (Acoustic) - 360 Degree Edition.webm';
import places from './places.json';

function MapPannellum() {
  const [im, setIm] = useState(1);

  let history = useHistory();
  function handleClick() {
    history.push('/PannellumPage');
  }
  function handleClick1(id) {
    setIm(id);
  }
  return (
    <div className="PannellumPage1">
      <div>
        <Map
          center={{lat: 40.6451594, lng: -74.0850826}}
          zoom={10}
          places={places}
          handleClick1={handleClick1}
        />
      </div>
      <div>
        <Pannellum
          width="100%"
          height="500px"
          image={im === 1 ? myImage : im === 2 ? myImage1 : myImage2}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          showZoomCtrl={false}
          onLoad={() => {
            console.log('panorama loaded');
          }}
        ></Pannellum>
        <button className="BackBtn" onClick={handleClick}>
          back
        </button>
      </div>
    </div>
  );
}

export default MapPannellum;
