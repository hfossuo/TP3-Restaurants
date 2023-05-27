import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider } from '@mui/material/styles';

import store from './store/store'; // Assuming you have a configured Redux store
import App from './App';
import {createTheme} from "@mui/material";

const baseTheme = createTheme({
    spacing: 1
});
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={baseTheme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
