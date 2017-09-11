import React from 'react';

export const Success = (props) => (
  <div>
    <h2>
      <span style={{color: 'green'}}>{props.title}</span> | Request nº: {props.id}
    </h2>
    <p>{props.detail}</p>
  </div>
);

export default Success;
