import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const GOT_SMURF = 'GOT_SMURF';
export const SUBMIT_FORM = 'SUBMIT_FORM'

export const getSmurf = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING_DATA_START });
        axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
			console.log(res.data);
			dispatch({ type: GOT_SMURF, payload: res.data });
		});
	};
};

export const addSmurf = (smurf) => {
	return (dispatch) => {
        axios
        .post('http://localhost:3333/smurfs', smurf)
        .then((res) => {
            console.log(res.data)
            console.log(smurf)
			dispatch({ type: SUBMIT_FORM, payload: res.data });
        })
        .catch(err => console.log(err.message))
	};
};
