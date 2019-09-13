import { FETCHING_DATA_START, GOT_SMURF, SUBMIT_FORM } from '../actions';

const initialState = {
	smurfs: [
		{
		},
    ],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
        case FETCHING_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            } 
        case GOT_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case SUBMIT_FORM:
            return {
                ...state,
                smurfs: action.payload
            }
		default:
			return state;
	}
};
