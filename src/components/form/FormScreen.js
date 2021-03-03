import React, { useState } from 'react';

import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import RadioButton from './RadioButton';
import Checkbox from './Checkbox';
import FileInput from './FileInput';

function FormScreen() {
  return (
    <React.Fragment>
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <RadioButton />
      <Checkbox />
      <FileInput />
    </React.Fragment>
  );
}

export default FormScreen;
