import React, {useState} from 'react';
import {Pannellum, PannellumVideo} from 'pannellum-react';
import myImage from '../assets/images/milan.jpg';
import myImage1 from '../assets/images/wallpaperflare.com_wallpaper.jpg';
import myImage2 from '../assets/images/wallpaperflare.com_wallpaper1.jpg';
import myVideo from '../assets/images/Empyre - Cut To The Core (Acoustic) - 360 Degree Edition.webm';
import {useHistory} from 'react-router-dom';

function PannellumList() {
  const [im, setIm] = useState(1);
  let history = useHistory();
  function handleClick() {
    history.push('/PannellumPage');
  }
  return (
    <div className="PannellumPage">
      {im === 4 ? (
        <PannellumVideo
          video={myVideo}
          loop={false}
          width="100%"
          height="600px"
          pitch={10}
          yaw={180}
          hfov={140}
          minHfov={50}
          maxHfov={180}
          muted={false}
        >
          <Pannellum.Hotspot
            type="custom"
            pitch={31}
            yaw={150}
            handleClick={(evt, name) => setIm(2)}
            name="hs1"
          />

          <Pannellum.Hotspot
            type="info"
            pitch={31}
            yaw={-57}
            text="Info"
            URL="https://github.com/farminf"
          />
        </PannellumVideo>
      ) : (
        <Pannellum
          width="100%"
          height="500px"
          image={
            im === 1
              ? myImage
              : im === 2
              ? myImage1
              : im === 3
              ? myImage2
              : im === 5 && myImage
          }
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          showZoomCtrl={false}
          onLoad={() => {
            console.log('panorama loaded');
          }}
        >
          <Pannellum.Hotspot
            type="custom"
            pitch={31}
            yaw={150}
            name="44444444444"
            handleClick={(evt, name) => setIm(2)}
          />
        </Pannellum>
      )}

      <div>
        <ul className="listBox">
          <li onClick={() => setIm(1)} className="list">
            1
          </li>
          <li onClick={() => setIm(2)} className="list">
            2
          </li>
          <li onClick={() => setIm(3)} className="list">
            3
          </li>
          <li onClick={() => setIm(4)} className="list">
            4
          </li>
          <li onClick={() => setIm(5)} className="list">
            5
          </li>
        </ul>
        <button className="BackBtn" onClick={handleClick}>
          back
        </button>
      </div>
    </div>
  );
}

export default PannellumList;
