import React from 'react';
import Bulb from 'react-bulb';

const Light = ({ color }) => (
  <div className='light'>
    <Bulb size={60} color={color} />
  </div>
);
export default Light;
