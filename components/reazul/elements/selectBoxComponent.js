import React from "react";

function SelectBoxComponent() {
  const disabled = false;
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
        <>
            <div className="select-container mb-3 ">
                <select disabled={disabled === true ? true : false} className={`form-select mb-3 block w-full px-4 py-2 border border-solid rounded transition ease-in-out m-0 focus:text-dark focus:bg-white focus:border-blue-600 focus:outline-none `}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default SelectBoxComponent;
