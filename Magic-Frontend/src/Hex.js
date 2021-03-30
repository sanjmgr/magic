import React from 'react';
import { Popup } from 'semantic-ui-react';

const Hex = ({ hex }) => {
  let prefix = hex.slice(0, 8);
  let postfix = hex.slice(-5);
  let hexString = prefix + '...' + postfix;
  console.log(hexString);

  return (
    <Popup
      content={hex}
      trigger={<p>{hexString}</p>}
      hoverable={true}
      size='tiny'
      position='top center'
    />
  );
};

export default Hex;
