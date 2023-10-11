//styles
import 'assets/styles/global.scss';
//components
import Input from 'shared/components/Inputs/Input';

const App = () => {
	return (
		<div className="app">
			<Input label="Name" placeholder="Type your name" />
		</div>
	);
};

export default App;
