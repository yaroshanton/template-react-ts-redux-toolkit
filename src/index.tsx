import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@mui/material';
import theme from 'assets/theme';
import App from './App';
import store from './store';
//styles
import './index.css';

const element = document.getElementById('root');
const root = createRoot(element as HTMLElement);

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
	// </React.StrictMode>
);
