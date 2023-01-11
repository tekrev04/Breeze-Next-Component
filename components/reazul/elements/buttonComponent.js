import React from "react";

function ButtonComponent(props) {
    const { className, btnText, btnIcon, onClick, disabled } = props;
    return (
        <button className={`btn ${className}`} disabled={disabled === true ? true : false} onClick={onClick}>
            <div className="btn-flex">
                {btnText}
                <span>{btnIcon}</span>
            </div>
        </button>
    );
}

export default ButtonComponent;
