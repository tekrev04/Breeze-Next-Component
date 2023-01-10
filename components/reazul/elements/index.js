import React from "react";
import TypographyComponent from "./typography";
import ButtonComponent from "./buttonComponent";
import { BsPlusLg } from "react-icons/bs";

function ElementsComponent() {
    const handleClick = () => {
        console.log("clicked btn");
    };
    return (
        <div>
            {/* <TypographyComponent /> */}
            <ButtonComponent
                class={"outline-primary"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                btnOnClick={handleClick}
            />
           
        </div>
    );
}

export default ElementsComponent;
