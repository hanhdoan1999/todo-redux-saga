import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootSaga from './sagas/rootSaga';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './reducers';
//Redux Saga
import createSagaMiddleware from 'redux-saga'; // hàm này có nhiệm vụ tạo ra một middleware năm giữa action và reducer trong redux

// Middleware
const sagaMiddleware = createSagaMiddleware(); 

var store = createStore(
  myReducer,
  applyMiddleware(sagaMiddleware)
);

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga); // Hàm này là chạy các saga
reportWebVitals();
