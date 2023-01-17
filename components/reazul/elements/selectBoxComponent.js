import React from "react";

function SelectBoxComponent(props) {
    const { inputLabel, disabled } = props;
    const options = [
        {
            label: "Apple",
            value: "apple",
        },
        {
            label: "Mango",
            value: "mango",
        },
        {
            label: "Banana",
            value: "banana",
        },
        {
            label: "Pineapple",
            value: "pineapple",
        },
    ];

    return (
        <div className="select-container mb-3 ">
            <label for="inputBoxLabel" className="inline-block mb-1">
                {inputLabel}
            </label>
            <select
                disabled={disabled === true ? true : false}
                className={`form-select mb-3 px-3 py-0 border border-solid rounded m-0 focus:text-dark focus:bg-white focus:outline-none`}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectBoxComponent;
