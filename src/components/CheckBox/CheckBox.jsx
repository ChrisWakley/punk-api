import React from "react";
import "./CheckBox.scss";

const CheckBoxes = ({handleChange}) => {
    return (
        <div className="checkboxes">
            <label className="checkboxes__label">
                <input type="checkbox" 
                value="highABV"
                onChange={handleChange}
                placeholder="ABV"
                />
                ABV &gt; 6%
            </label >
            <label className="checkboxes__label">
                <input type="checkbox" 
                value="Classic"
                onChange={handleChange}
                placeholder="Classic Range"
                />
                Classic Range
            </label>
            <label className="checkboxes__label">
                <input type="checkbox" 
                value="PH"
                onChange={handleChange}
                placeholder="PH"
                />
                PH &lt; 4
            </label>
        </div>
    );
};

export default CheckBoxes;