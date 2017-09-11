import React from 'react';

import {
  STATE_PENDING,
  STATE_SUCCESSFUL,
  STATE_FAILURE,
 } from '../api';

export const withAPIStatus = ({ SuccessComponent, LoadingComponent, ErrorComponent }) => function APIStatus(props) {
  const { status, ...restOfProps } = props;
  switch (status) {
    case STATE_PENDING:
      return <LoadingComponent {...restOfProps} />;
    case STATE_SUCCESSFUL:
      return <SuccessComponent {...restOfProps} />;
    case STATE_FAILURE:
      return <ErrorComponent {...restOfProps} />;
    default:
      return null;
  }
};

export default withAPIStatus;
