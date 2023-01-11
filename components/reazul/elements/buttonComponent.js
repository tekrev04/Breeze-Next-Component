import React from "react";
import { BsPlusLg } from "react-icons/bs";

function ButtonComponent(props) {
    const {className, btnText, btnIcon, onClick, disabled } = props;
    return (
        <div>
            <button
                className={`btn ${className}`}
                disabled={disabled === true ? true : false}
                onClick={onClick}>
                <div className="btn-flex">
                    {btnText}
                    <span>{btnIcon}</span>
                </div>
            </button>
        </div>
    );
}

export default ButtonComponent;