import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@common/redux';
import { Theme, Wrapper } from '@layouts/Lampastar';

import { DOWN_SHEET_PORTAL_ID, MODAL_PORTAL_ID } from '../../constants';
import { ErrorRouterContext, defaultContext, ToastsContext } from '../../context';
import { FeatureTogglesContextProvider, getToggles } from '../../featureToggles';
import { ErrorContext, ToastsContextType, ToastType } from '../../types';
import { Routes } from '../Routes';
import { Toasts } from '../Toasts';

type Props = {
  context?: ErrorContext;
};

type State = {
  isInitApp: boolean;
  context: ErrorContext;
  toastsContext: ToastsContextType;
};

const initialToggles = getToggles();

export class InitialComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.setStatusCode = this.setStatusCode.bind(this);
    this.addToast = this.addToast.bind(this);
    this.removeToast = this.removeToast.bind(this);

    this.state = {
      isInitApp: false,
      context: this.props.context || {
        ...defaultContext,
        setStatusCode: this.setStatusCode,
      },
      toastsContext: {
        toasts: [],
        addToast: this.addToast,
        removeToast: this.removeToast,
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

  addToast(toast: ToastType) {
    this.setState({
      toastsContext: {
        ...this.state.toastsContext,
        toasts: [...this.state.toastsContext.toasts, toast],
      },
    });
  }

  removeToast(toastId: string) {
    this.setState({
      toastsContext: {
        ...this.state.toastsContext,
        toasts: this.state.toastsContext.toasts.filter(({ id }) => id !== toastId),
      },
    });
  }

  render() {
    return (
      <ErrorRouterContext.Provider value={this.state.context}>
        <FeatureTogglesContextProvider value={initialToggles}>
          <Provider store={store}>
            <Theme>
              <ToastsContext.Provider value={this.state.toastsContext}>
                <Routes themeWrapper={<Wrapper />} />
                <div id={MODAL_PORTAL_ID} />
                <div id={DOWN_SHEET_PORTAL_ID} />
                <Toasts />
              </ToastsContext.Provider>
            </Theme>
          </Provider>
        </FeatureTogglesContextProvider>
      </ErrorRouterContext.Provider>
    );
  }
}
