//styles
import '@styles/global.scss';
import {ReactComponent as Plus} from '@images/icons/plus.svg';
import Button from '@components/Button';

const App = () => {
	return (
		<div className="app">
			<Button startIcon={<Plus />} title="Create new event" />
		</div>
	);
};

export default App;
