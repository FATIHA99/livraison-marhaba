import React from "react";
import Routs from './User/Routs';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import{ createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';

let store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const App = ()=> {
  return (
    <div>
      <Provider store={store}>
      <Routs/>
      </Provider>
    </div>
  );
}

export default App;
