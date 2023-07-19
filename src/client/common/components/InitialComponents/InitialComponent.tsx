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
      context: props.context || {
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
    this.setState((state) => ({
      context: {
        setStatusCode: state.context.setStatusCode,
        error: { code, message: state.context.error.message },
      },
    }));
  }

  addToast(toast: ToastType) {
    this.setState((state) => ({
      toastsContext: {
        ...state.toastsContext,
        toasts: [...state.toastsContext.toasts, toast],
      },
    }));
  }

  removeToast(toastId: string) {
    this.setState((state) => ({
      toastsContext: {
        ...state.toastsContext,
        toasts: state.toastsContext.toasts.filter(({ id }) => id !== toastId),
      },
    }));
  }

  render() {
    const { context, toastsContext } = this.state;

    return (
      <ErrorRouterContext.Provider value={context}>
        <FeatureTogglesContextProvider value={initialToggles}>
          <Provider store={store}>
            <Theme>
              <ToastsContext.Provider value={toastsContext}>
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
