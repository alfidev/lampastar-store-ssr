import React from "react";
import { Wrapper } from "@layouts/Lampastar";
import { Routes } from "../Routes";

type Props = {};

type State = {};

export class InitialComponent extends React.Component<Props, State> {
  //@ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      isInitApp: false,
    };
  }

  render() {
    return (
      <Wrapper>
        <Routes />
      </Wrapper>
    );
  }
}
