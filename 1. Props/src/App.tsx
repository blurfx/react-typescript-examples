import * as React from 'react';
import MyName from './components/MyName';
import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <MyName name="asd" />
      </div>
    )
  }
}

export default App;