//types
import {OverridableStringUnion} from '@mui/types';
//constants
import {SUCCESS, PRIMARY, ERROR, WARNING} from '@/utils/constants/button';

export type DefaultButtonColor = OverridableStringUnion<
	typeof PRIMARY | typeof SUCCESS | typeof ERROR | typeof WARNING
>;
