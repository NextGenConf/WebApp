import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider, themes } from '@stardust-ui/react';
import App from "./App";

ReactDOM.render(
    <Provider theme={themes.teams}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
