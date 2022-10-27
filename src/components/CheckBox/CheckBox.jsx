import React from "react";
import "./CheckBox.scss";

const CheckBoxes = ({handleChange}) => {
    return (
        <div className="checkboxes">
            <label className="checkboxes__label">
                <input type="checkbox" 
                value="highABV"
                onChange={handleChange}
                />
                ABV &gt; 6%
            </label >
            <label className="checkboxes__label">
                <input type="checkbox" 
                value="Classic"
                onChange={handleChange}
                />
                Classic Range
            </label>
            <label className="checkboxes__label">
                <input type="checkbox" 
                value="PH"
                onChange={handleChange}
                />
                PH &lt; 4
            </label>
        </div>
    );
};

export default CheckBoxes;