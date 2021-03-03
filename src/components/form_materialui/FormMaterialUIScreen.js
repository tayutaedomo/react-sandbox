import React from 'react';

import TextFields from './TextFields';
import Sliders from './Sliders';
import Switches from './Switches';

function FormMaterialUIScreen() {
  return (
    <React.Fragment>
      <div>
        <TextFields />
        <Sliders />
        <Switches />
      </div>
    </React.Fragment>
  );
}

export default FormMaterialUIScreen;
