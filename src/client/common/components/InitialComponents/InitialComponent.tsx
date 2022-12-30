import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@common/redux';
import { Theme, Wrapper } from '@layouts/Lampastar';

import { MODAL_PORTAL_ID } from '../../constants';
import { ErrorRouterContext, defaultContext } from '../../context';
import { FeatureTogglesContextProvider, getToggles } from '../../featureToggles';
import { ErrorContext } from '../../types';
import { Routes } from '../Routes';

type Props = {
  context?: ErrorContext;
};

type State = {
  isInitApp: boolean;
  context: ErrorContext;
};

const initialToggles = getToggles();

export class InitialComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.setStatusCode = this.setStatusCode.bind(this);

    this.state = {
      isInitApp: false,
      context: this.props.context || {
        ...defaultContext,
        setStatusCode: this.setStatusCode,
      },
    };
  }

  setStatusCode(code: number) {
    this.setState({
      context: {
        setStatusCode: this.state.context.setStatusCode,
        error: { code, message: this.state.context.error.message },
      },
    });
  }

  render() {
    return (
      <ErrorRouterContext.Provider value={this.state.context}>
        <FeatureTogglesContextProvider value={initialToggles}>
          <Provider store={store}>
            <Theme>
              <Routes themeWrapper={<Wrapper />} />
              <div id={MODAL_PORTAL_ID} />
            </Theme>
          </Provider>
        </FeatureTogglesContextProvider>
      </ErrorRouterContext.Provider>
    );
  }
}
