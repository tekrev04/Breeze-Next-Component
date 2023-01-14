import React from "react";

function InputBoxComponent(props) {
    const { inputLabel, inputPlaceholder, disabled, message, setMessage, handleChange } = props;

    return (
        <>
            <div className="flex">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="inline-block mb-1">
                        {inputLabel}
                    </label>
                    <input
                        onChange={handleChange}
                        disabled={disabled === true ? true : false}
                        type="text"
                        className="block px-3 py-1.5 bg-clip-padding border border-solid rounded focus:text-dark focus:bg-white focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder={inputPlaceholder}
                    />
                    <p>{message}</p>
                </div>
            </div>
        </>
    );
}

export default InputBoxComponent;
