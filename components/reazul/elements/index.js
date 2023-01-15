import React, { useState } from "react";
import TypographyComponent from "./typographyComponent";
import ButtonComponent from "./buttonComponent";
import { BsPlusLg } from "react-icons/bs";
import SearchComponent from "./searchComponent";
import NotificationComponent from "./notificationComponent";
import MenuButtonComponent from "./menuButtonComponent";
import SelectBoxComponent from "./selectBoxComponent";
import InputBoxComponent from "./inputBoxComponent";
import SidebarTitleComponent from "../sidebarTitle";
import TekrevTitleComponent from "../tekrevTitle";
import UserAvatarComponent from "../userAvatar";

function ElementsComponent() {
    const onClick = () => {
        console.log("clicked btn");
    };

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    // from farabi
    const userimg = "";
    const userName = "mahian farabi"
    // end farabi

    return (
        <div>
            <section className="card border-2 border-red-500 my-3">
                {/* Start from Farabi */}
                <TekrevTitleComponent />
                <SidebarTitleComponent/>
                <UserAvatarComponent userName={userName} userimg={userimg}/>
                {/* End from Farabi */}
            </section>

            
            {/* Select-Box */}
            <SelectBoxComponent 
                disabled={false}
            />
            <SelectBoxComponent 
                disabled={true}
            />

            {/* Input box component */}
            <InputBoxComponent
                inputLabel={"Input Label"}
                inputPlaceholder={"Placeholder..."}
                disabled={false}
                message={message}
                setMessage={setMessage}
                handleChange={handleChange}
            />
            <InputBoxComponent
                inputLabel={"Input Label"}
                inputPlaceholder={"Placeholder..."}
                disabled={true}
                message={message}
                setMessage={setMessage}
                handleChange={handleChange}
            />

            <SearchComponent onClick={onClick} />

            {/* menu-button component */}
            <hr />
            <MenuButtonComponent
                btnText={"Menu Button Active"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                isActive={true}
            />

            <MenuButtonComponent
                btnText={"Menu Button Inactive"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                isActive={false}
            />

            {/* notification component */}
            <hr />
            <NotificationComponent hasNotification={false} />

            <hr />
            {/* <TypographyComponent /> */}

            {/* button-area start */}
            <hr />
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
            {/* button-area end */}
        </div>
    );
}

export default ElementsComponent;
