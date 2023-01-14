import React from "react";

function MenuButtonComponent(props) {
    const { btnText, btnIcon, onClick, isActive } = props;

    return (
        <>
            <button className={`btn border ${isActive === true ? "bg-white" : "bg-disable"}`} onClick={onClick}>
                <div className={`flex ${isActive === true ? "text-success" : "text-disable"}`}>
                    <span className="pt-1 pr-2">{btnIcon}</span>
                    {btnText}
                </div>
            </button>
        </>
    );
}

export default MenuButtonComponent;
