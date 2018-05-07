import * as React from 'react';
import { Provider } from 'react-redux';
import Counter from './modules/counter/Container';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}

export default App;
