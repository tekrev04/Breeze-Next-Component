import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

function NotificationComponent(props) {
    const { hasNotification } = props;

    return (
        <div>
            <button className="flex relative">
                <IoNotificationsOutline className="text-4xl  border-1 border-gray-100 p-1 rounded-full bg-white" />
                <span
                    className={`notification-status-bg absolute right-1 top-0 p-1 rounded-full 
                    ${hasNotification === true ? "bg-success" : "bg-warning"}`}>
                </span>
            </button>
        </div>
    );
}

export default NotificationComponent;
