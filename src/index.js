import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app";
import {Provider} from "react-redux";
import Store from  "../src/state/store"

let jsx = (<Provider store ={Store}> <App/> </Provider>)

ReactDOM.render(jsx, document.querySelector("#root"))

