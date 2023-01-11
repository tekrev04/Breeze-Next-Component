import React from "react";
import TypographyComponent from "./typography";
import ButtonComponent from "./buttonComponent";
import { BsPlusLg } from "react-icons/bs";
import SearchComponent from "./searchComponent";
import NotificationComponent from "./notificationComponent";

function ElementsComponent() {
    const onClick = () => {
        console.log("clicked btn");
    };
    return (
        <div>
            <SearchComponent onClick={onClick}/>
            <hr />
            {/* <NotificationComponent/> */}
<hr />
            {/* <TypographyComponent /> */}
            <ButtonComponent
                className={"outline-success"}
                btnText={"outline-success"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
            <ButtonComponent
                className={"outline-success"}
                btnText={"outline-success"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />
            
            <ButtonComponent
                className={"btn-success"}
                btnText={"btn-success"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
            <ButtonComponent
                className={"btn-success"}
                btnText={"btn-success"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />

        </div>
    );
}

export default ElementsComponent;
