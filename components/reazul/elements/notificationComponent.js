import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

function NotificationComponent() {
    return (
        <div className="">
            <button className="flex">
                <IoNotificationsOutline className="text-4xl  border-1 border-gray-200 p-1 rounded-full" />
                <span className="bg-green-400 p-1 rounded-full"></span>
            </button>
        </div>
    );
}

export default NotificationComponent;
