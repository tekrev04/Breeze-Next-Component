import React from "react";

function InputBoxComponent(props) {
    const { inputLabel, inputPlaceholder, disabled, message, setMessage, handleChange } = props;

    return (
        <div className="flex">
            <div className="mb-3">
                <label for="inputBoxLabel" className="inline-block mb-1">
                    {inputLabel}
                </label>
                <input
                    onChange={handleChange}
                    disabled={disabled === true ? true : false}
                    type="text"
                    className="form-control px-3 py-1.5 border border-solid  rounded m-0 focus:outline-none"
                    id="inputBox"
                    placeholder={inputPlaceholder}
                />
            </div>
        </div>
    );
}

export default InputBoxComponent;

