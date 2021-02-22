import React from 'react';

import Clock from './Clock';

export default function ClockScreen() {
  return (
    <div>
      <Clock interval={1000} />
      <Clock interval={2000} />
      <Clock interval={5000} />
      <Clock interval={10000} />
    </div>
  );
}
