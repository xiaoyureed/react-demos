import React from 'react';
import {Provider} from 'react-redux';
import Input from "./comps/container/Input";
import Output from "./comps/container/Output";
import store from './store';
import css from './App.module.css';

const App = () => (
    <Provider store={store}>
      <div className={css.app}>
        <Input/>
        <Output/>
      </div>
    </Provider>
);

export default App;
