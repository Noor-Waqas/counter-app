import React from 'react';
import Counter from "./comonent/counter"
import { Provider } from 'react-redux';
import store from "./comonent/store"
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;