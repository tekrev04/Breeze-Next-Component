import React from "react";
import HeaderAreaLeftComponent from "./headerAreaLeftComponent";
import HeaderAreaRightComponent from "./headerAreaRightComponent";

function HeaderAreaComponent() {
    return (
        <>
            <div className="header-main-area shadow text-dark flex items-center justify-between px-3 py-1">
                <h4>Teknovus Limited</h4>
                <HeaderAreaRightComponent />
            </div>

            <div className="header-main-area shadow bg-dark-light text-dark flex items-center justify-between px-2 pt-4 pb-3">
                <HeaderAreaLeftComponent headerTitle={"Order Management"} />
            </div>
        </>

        // <div className="header-main-area bg-dark-light text-dark flex justify-between">
        //     <HeaderAreaLeftComponent headerTitle={"Order Management"} />

        //     <HeaderAreaRightComponent />
        // </div>
    );
}

export default HeaderAreaComponent;
