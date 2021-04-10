/* eslint-disable no-labels */
import React, {useState} from 'react';
import Krpano from 'react-krpano';

function Krpanopage() {
  const [popState, setPopState] = useState(false);
  const [eyes, setEyes] = useState(false);
  const [eyeMode, setEyeMode] = useState(false);
  const pop = (e) => {
    setPopState(e);
  };
  const hooks = (e) => {
    // eslint-disable-next-line no-label-var
    pop(e);
    setEyes(!eyes);
    setEyeMode(eyes);
  };

  const eyeModeSwitch = () => {
    let vl = window.krpano.get('view.vlookat');
    let hl = window.krpano.get('view.hlookat');
    if (this.state.eyeMode)
      window.krpano.call(
        'loadscene(scene_inside,null,MERGE,BLEND(1.0, easeInCubic));'
      );
    else
      window.krpano.call(
        'loadscene(scene_inside_eye,null,MERGE,BLEND(1.0, easeInCubic));'
      );
    setTimeout(() => {
      window.krpano.set('view.hlookat', hl);
      // window.krpano.set('view.vlookat', vl);
    }, 50);
    setEyeMode(!eyeMode);
  };
  const next = () => {
    window.krpano.call(
      'loadscene(scene_test2,null,MERGE,BLEND(1.0, easeInCubic))'
    );
  };

  const lockView = () => {
    window.krpano.hooks.lockView('h');
    // let vl = window.krpano.get('view.vlookat')
    // let hl = window.krpano.get('view.hlookat')
    // window.krpano.set('view.vlookatmin', vl)
    // window.krpano.set('view.vlookatmax', vl)
    // window.krpano.set('view.hlookatmin', hl)
    // window.krpano.set('view.hlookatmax', hl)
    // window.krpano.set('view.limitview', 'lookat')
  };

  const unlockView = () => {
    window.krpano.set('view.limitview', 'auto');
  };

  const mounted = () => {
    console.log('krpano is ready');
  };

  return (
    <div>
      <div className={'panel'}>
        <div className="test">
          <button
            onClick={() => {
              window.krpano.set('hotspot[spot3].visible', 'false');
              window.krpano.set('hotspot[spot3y].visible', 'true');
            }}
          >
            test
          </button>
          <button
            onClick={() => {
              window.krpano.set('hotspot[spot3].visible', 'false');
              window.krpano.set('hotspot[spot3x].visible', 'true');
            }}
          >
            test1
          </button>
          <button
            onClick={() => {
              window.krpano.hooks.lockView('h');
            }}
          >
            test2
          </button>
          <button
            onClick={() => {
              window.krpano.hooks.unlockView();
            }}
          >
            test3
          </button>
        </div>

        {eyes && (
          <div
            className={['eyes', eyeMode ? 'act' : ''].join(' ')}
            onClick={() => eyeModeSwitch()}
          />
        )}
        {popState && (
          <div
            className={['popup', popState === 2 ? 'popup_second' : ''].join(
              ' '
            )}
            onClick={() => {
              if (popState === 2) setPopState(false);
            }}
          >
            {popState === 1 && (
              <div className={'popup_main'}>
                <div
                  className={'popup_button'}
                  onClick={() => {
                    window.location = 'https://jx3.xoyo.com/';
                  }}
                />
                <div
                  className={'popup_close'}
                  onClick={() => {
                    setPopState(false);
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <Krpano hooks={hooks} dev={false} gray={false} />
      </div>
    </div>
  );
}

export default Krpanopage;
