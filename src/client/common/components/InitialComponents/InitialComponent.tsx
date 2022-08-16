import React from "react";
import { Theme, Wrapper } from "@layouts/Lampastar";
import { Routes } from "../Routes";
import { ErrorContext } from "@common/types";
import { ErrorRouterContext, defaultContext } from "@common/context";

type Props = {
  context?: ErrorContext;
};

type State = {
  isInitApp: boolean;
  context: ErrorContext;
};

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
        <Theme>
          <Routes themeWrapper={<Wrapper />} />
        </Theme>
      </ErrorRouterContext.Provider>
    );
  }
}
