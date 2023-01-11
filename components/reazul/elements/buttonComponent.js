import React from "react";
import { BsPlusLg } from "react-icons/bs";

function ButtonComponent(props) {
    console.log(props);
    return (
        <div>
            <button
                className={`btn ${props.class}`}
                disabled={props.disabled === true ? true : false}
                onClick={props.btnOnClick}>
                <div className="btn-flex">
                    {props.btnText}
                    <span>{props.btnIcon}</span>
                </div>
            </button>
        </div>
    );
}

export default ButtonComponent;