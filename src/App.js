import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {Provider} from 'react-redux';
import configureStore from "./store";

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
