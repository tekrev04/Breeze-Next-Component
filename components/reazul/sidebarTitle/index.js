//Coded By Farabi

import React from "react";
import { FaBeer } from "react-icons/fa";
import { useState } from "react";

function SidebarTitleComponent() {
    const [navList, setnavList] = useState(0);
    const navdata = [
        {
            title: "My Dashboard",
            icon: <FaBeer />,
            link: "google.com",
        },
        {
            title: "Live Factory",
            icon: <FaBeer />,
            link: "meet.com",
        },
        {
            title: "Order Management",
            icon: <FaBeer />,
            link: "react.com",
        },
    ];

    const handleClick = (index) => {
        setnavList(index);
    };
    return (
        <div>
            <ul className="px-4">
                {navdata.map((value, index) => {
                    return (
                        <li
                            className={`${navList === index ? "active" : "sidebar"}`}
                            onClick={() => handleClick(index)}>
                            <span className="sidebar-icon">{value.icon}</span>
                            {value.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SidebarTitleComponent;

/* CODED BY FARABI */
