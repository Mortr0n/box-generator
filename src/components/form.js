import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const {boxColor, setBoxColor} = props;
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [color, setColor] = useState("");
    
    const submitHandler= (e) => {
        e.preventDefault(e);

        const newBoxColor = ([...boxColor, {
            color,
            height,
            width,
        }])
        setBoxColor(newBoxColor);
        setColor("");
        setHeight("");
        setWidth("");
    };

    return(
        <div>
            <h1>Add A Box!</h1>
            <form onSubmit={submitHandler} className="boxForm">
                <label htmlFor="color">Color : </label>
                {/* Need to see how to do the color here */}
                <input name="color" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <label htmlFor="height">Height : </label>
                <input name="height" type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                <label htmlFor="width">Width : </label>
                <input name="width" type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default Form;