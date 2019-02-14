import * as React from 'react';

interface MyNameProps {
  name: string;
}

class MyName extends React.Component<MyNameProps, {}> {
  static defaultProps: MyNameProps = {
    name: 'Unnamed',
  }
  render() {
    return (
      <div> My name is&nbsp;<b>{this.props.name}</b></div>
    );
  }
}

export default MyName;