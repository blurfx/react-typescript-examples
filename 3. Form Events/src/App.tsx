import * as React from 'react';
import PhoneForm from './components/PhoneForm';
import './App.css';

interface IAppState {
  information: Array<{
    id: number;
    name: string;
    phone: string;
  }>;
}

class App extends React.Component<{}, IAppState> {
  state = {
    information: []
  };

  constructor(props: any) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(data: any) {
    this.setState(({ information }) => {
      const id = information.length > 0 ? information[information.length - 1].id + 1 : 0;
      return ({
        information: information.concat({
          id,
          ...data
        })
      });
    })
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
      </div>
    )
  }
}

export default App;