import React, { useState } from 'react';

const Form = (props) => {
    const {box, setBox} = props;



    return(
        <div>
            <h1>Add A Box!</h1>
            <form>
                <label htmlFor="color">Color : </label>
                {/* Need to see how to do the color here */}
                <input name="color" type="text" ></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default Form;