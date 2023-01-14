import React from "react";

function SelectBoxComponent() {
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
            <div className="select-container mb-3 xl:w-96">
                <select className="form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default SelectBoxComponent;
