import React from "react";
import { BsPlusLg } from "react-icons/bs";
import ButtonComponent from "../elements/buttonComponent";

function HeaderAreaLeftComponent(props) {
    const { headerTitle } = props;
    const onClick = () => {
        console.log("clicked btn");
    };

    return (
        <div className="header-left-area px-2">
            <h5 className="p-0 m-0">{headerTitle}</h5>
            <ButtonComponent
                className={"btn-success"}
                btnText={"Create New Order"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
        </div>
    );
}

export default HeaderAreaLeftComponent;
