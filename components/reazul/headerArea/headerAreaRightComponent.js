import React from "react";
import NotificationComponent from "../elements/notificationComponent";
import SearchComponent from "../elements/searchComponent";

function HeaderAreaRightComponent() {
    return (
        <div className="header-right-area flex items-center justify-center px-2">
            <SearchComponent />
            
            <span className="px-1"></span>
            <NotificationComponent hasNotification={false} />
        </div>
    );
}

export default HeaderAreaRightComponent;
