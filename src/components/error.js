import React from 'react';

export const Error = (props) => (
  <div>
    <h2>
      Error: <span style={{color:'red'}}>{props.title}</span>
    </h2>
    <p>{props.detail}</p>
  </div>
);

export default Error;
