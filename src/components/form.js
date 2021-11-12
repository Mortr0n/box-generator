import React, { useState } from 'react';

const Form = (props) => {
    const {box, setBox} = props;
    const [color, setColor] = useState("");


    const submiHandler= (e) => {
        e.preventDefault(e);

        setBox([...box, {
            color,
        }])
        setColor("");
    };

    return(
        <div>
            <h1>Add A Box!</h1>
            <form onSubmit={submiHandler} className="boxForm">
                <label htmlFor="color">Color : </label>
                {/* Need to see how to do the color here */}
                <input name="color" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default Form;