import React from 'react';
import useKrpano from 'react-krpano-hooks';

function KrpanoHook() {
  const {containerRef, callKrpano} = useKrpano();

  const resetLookat = () => {
    callKrpano('lookto(0, 0)');
  };
  return (
    <div>
      <button
        onClick={resetLookat}
        style={{top: '10px', left: '10px', position: 'fixed', zIndex: '1000'}}
      >
        Reset
      </button>
      <div ref={containerRef} style={{width: '100%', height: '100%'}} />
    </div>
  );
}

export default KrpanoHook;
