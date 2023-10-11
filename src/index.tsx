import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@mui/material';
import theme from './assets/theme';
import App from './App';
import store from './store';
//styles
import './index.css';

const element = document.getElementById('root');
const root = createRoot(element as HTMLElement);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
