import * as React from 'react';

export interface IValues {
  [key: string]: any;
}

interface IFormProps {
  defaultValues: IValues;
}

interface IState {
  values: IValues;
}

export class Form extends React.Component<IFormProps, IState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      values: props.defaultValues,
    };
  }
  public render() {
    return (
      <form className="form" noValidate={true}>
        {this.props.children}
      </form>
    );
  }
}
