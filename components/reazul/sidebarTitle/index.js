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
    setnavList(index)
  }
  return (
    <div>
      <ul>
        {navdata.map((value, index) => {
          // console.log(value.title, "valuessssss");
          return (
              <li className={`${navList === index ? "active" : "sidebar"}`} onClick={()=> handleClick(index)}>
              {value.icon}
                {value.title}
              </li>
            // <a>
            //   <li className="sidebar" >
            //     <i className="sidebar-icon">{value.icon}</i>
            //     {value.title}
            //   </li>
            // </a>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarTitleComponent;

/* CODED BY FARABI */