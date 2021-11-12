import React from 'react';

const Display = (props) => {

    const {boxColor} = props;

    return(
        <div class="display" >
            {boxColor.map((color, index) => (
                <div key={index} style={{display:"flex", flexWrap:'wrap', width:color.width+"px", height:color.height+"px", flexDirection:"column", padding:"10px", border:"2px solid black", margin:"5px", backgroundColor: color.color}} >
                    <p>{color.color}</p>
                </div>
            ))}
        </div>
    )

}

export default Display;