import React, {useEffect} from 'react';
import {Pannellum, PannellumVideo} from 'pannellum-react';
import myImage from '../assets/images/milan.jpg';
import {useHistory} from 'react-router-dom';

function PropsPannellum() {
  useEffect(() => {
    alert('Move Mouse');
  }, []);
  let history = useHistory();
  function handleClick() {
    history.push('/PannellumPage');
  }
  return (
    <div>
      <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        haov={180}
        vaov={90}
        vOffset={1}
        pitch={10}
        yaw={180}
        hfov={110}
        maxHfov={170}
        minHfov={30}
        autoLoad
        author=""
        title=""
        orientationOnByDefault={false}
        compass
        draggable
        keyboardZoom
        mouseZoom
        preview=""
        previewAuthor=""
        previewTitle=""
        showControls
        showFullscreenCtrl
        showZoomCtrl
        hotspotDebug={false}
        onLoad={() => {
          console.log('panorama loaded');
        }}
        onError={(err) => {
          console.log('Error', err);
        }}
        onErrorcleared={() => {
          console.log('Error Cleared');
        }}
        onMousedown={(evt) => {
          console.log('Mouse Down', evt);
        }}
        onMouseup={(evt) => {
          console.log('Mouse Up', evt);
        }}
        onTouchstart={(evt) => {
          console.log('Touch Start', evt);
        }}
        onTouchend={(evt) => {
          console.log('Touch End', evt);
        }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-167}
          text="Info Hotspot Text"
          URL="https://github.com/farminf"
        />
      </Pannellum>
      <button className="BackBtn" onClick={handleClick}>back</button>
    </div>
  );
}

export default PropsPannellum;
