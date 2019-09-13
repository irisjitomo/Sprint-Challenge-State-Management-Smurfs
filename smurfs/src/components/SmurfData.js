import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux';

import {getSmurf} from '../actions'
import {addSmurf} from '../actions'
const SmurfData = ({ smurfs, isFetching, error, getSmurf }) => {


    const [newSmurf, setNewSmurf] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newHeight, setNewHeight] = useState('')

    useEffect(() => {
        getSmurf();
    }, [getSmurf]);

    // const id = Date.now();

    const handleChangesSmurf = e => {
        setNewSmurf(e.target.value)
    }
    const handleChangesAge = e => {
        setNewAge(e.target.value)
    }
    const handleChangesHeight = e => {
        setNewHeight(e.target.value)
    }
    const smurf = {name: newSmurf, age: newAge, height: newHeight}
    
    const handleSubmitSmurf = e => {
        e.preventDefault();
        // addSmurf({newSmurf, newAge, newHeight});
        addSmurf(smurf)
        setNewSmurf('')
        setNewHeight('')
        setNewAge('')
    }

    if (isFetching) {
        return <h2>Loading...</h2>;
      }

    return (

        <div>
            {smurfs.map(smurf => {
                return (
                    <div key={smurf.id}>
                    <h3>Smurf: {smurf.name}</h3>
                    <h4>Age: {smurf.age}</h4>
                    <h4>Height: {smurf.height}</h4>
                    </div>
                    
                )
            })}
            <div>
                <h2>Add a new Smurf to your village:</h2>
            </div>

            <form onSubmit={handleSubmitSmurf}>
                <div>
                    <input 
                    name='newSmurf'
                    placeholder='Smurf Name...'
                    value={newSmurf}
                    onChange={handleChangesSmurf}></input>
                    
                    <input
                    name='newAge'
                    placeholder='Smurf Age...'
                    value={newAge}
                    onChange={handleChangesAge}>
                    </input>

                    <input
                    name='newHeight'
                    placeholder='Smurf Height...'
                    value={newHeight}
                    onChange={handleChangesHeight}>
                    </input>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfData);