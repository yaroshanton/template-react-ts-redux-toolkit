//styles
import '@styles/global.scss';
import {ReactComponent as Plus} from '@images/icons/plus.svg';
import {RadioGroup} from '@mui/material';
import Button from '@components/Button';
import Radio from '@components/Radio';
import Checkbox from '@components/Checkbox';

const App = () => {
	return (
		<div className="app">
			<Button startIcon={<Plus />} title="Create new event" />
			<RadioGroup name="use-radio-group" defaultValue="first">
				<Radio value="first" label="first" />
				<Radio value="tes1t" label="tes1t" />
			</RadioGroup>
			<Checkbox color="error" value="check" label="check1" />
			<Checkbox checked disabled color="error" value="check1" label="check12" />
			<Checkbox value="check2" label="check13" />
			<Checkbox checked disabled value="check3" label="check14" />
		</div>
	);
};

export default App;
