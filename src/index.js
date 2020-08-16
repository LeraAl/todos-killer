import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

import App from "./app";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__({
                serialize: true,
            })
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
