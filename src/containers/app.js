import React from 'react';
import { connect } from 'react-redux'

import withAPIStatus from '../components/with-api-status';
import Loading from '../components/loading';
import Success from '../components/success';
import Error from '../components/error';
import { requestStart } from '../actions';

const APIStatus = withAPIStatus({
  SuccessComponent: Success,
  LoadingComponent: Loading,
  ErrorComponent: Error,
});

export const App = (props) => {
  const {
    performRequestAction,
    ...restOfProps,
  } = props;
  return (
    <div>
      <main>
        <h1>Click the button</h1>
        <button onClick={(evt) => {
          evt.preventDefault();
          performRequestAction();
        }} >call api</button>
        <APIStatus {...restOfProps} />
      </main>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    status: state.app.status,
    detail: state.app.detail,
    id: state.app.id,
    title: state.app.title,
  };
}
const mapDispatchToProps = {
  performRequestAction: requestStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
