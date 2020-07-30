import * as React from 'react';

interface ITabProps {
  name: string;
  initialActive?: boolean;
}

interface IProps {
  headings: string[];
}

interface IState {
  activeName: string;
}

class Tabs extends React.Component<{}, IState> {
  public static Tab: React.SFC<ITabProps> = (props) => (
    <li>{props.children}</li>
  );

  private handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const heading: string = li.textContent ? li.textContent : '';
    this.setState({ activeName: heading });
  };

  public render() {
    return <ul className="tabs">{this.props.children}</ul>;
  }
}

export default Tabs;
