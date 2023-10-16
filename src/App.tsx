//styles
import '@styles/global.scss';
import {ReactComponent as Plus} from '@icons/checkbox-checked.svg';
import {RadioGroup} from '@mui/material';
import {useState} from 'react';

//components
import Button from '@components/Button';
import Radio from '@components/Radio';
import Checkbox from '@components/Checkbox';
import Dialog from '@components/Dialog';

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="app">
			<Button onClick={() => setOpen(true)} startIcon={<Plus />}>
				Show modal
			</Button>
			<RadioGroup name="use-radio-group" defaultValue="first">
				<Radio value="first" label="first" />
				<Radio value="tes1t" label="tes1t" />
			</RadioGroup>
			<Checkbox color="error" value="check" label="check1" />
			<Checkbox checked disabled color="error" value="check1" label="check12" />
			<Checkbox value="check2" label="check13" />
			<Checkbox checked disabled value="check3" label="check14" />
			<Dialog
				title="Modal Title"
				isShowCloseButton
				text="Please use your new password to log in."
				open={open}
				onClose={() => setOpen(false)}
				mainIcon={
					<Plus
						style={{
							color: 'red',
						}}
					/>
				}
			/>
		</div>
	);
};

export default App;
