import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App";
// import rootReducer from "./reducers";
import {tasks} from './reducers';

const store = configureStore({
  reducer: tasks,
});

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);