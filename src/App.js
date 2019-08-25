import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import {Provider} from 'react-redux';
import configureStore from "./store";

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </Provider>
  );
}

export default App;
