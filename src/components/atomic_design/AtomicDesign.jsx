import React from 'react';
import PrimaryButton from './atoms/button/PrimaryButton';
import SecondaryButton from './atoms/button/SecondaryButton';
import SearchInput from './molecules/SearchInput';

const AtomicDesign = () => {
  return (
    <div>
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
};

export default AtomicDesign;
