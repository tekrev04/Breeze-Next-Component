import React from "react";
import ButtonComponent from "../elements/buttonComponent";
import HeaderAreaLeftComponent from "./headerAreaLeftComponent";
import HeaderAreaRightComponent from "./headerAreaRightComponent";
import { BsStar } from "react-icons/bs";
import { RiDraftLine } from "react-icons/ri";
import { SiNike } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import MenuHeaderComponent from "../menuHeader";

function HeaderAreaComponent() {
  const onClick = () => {
    console.log("clicked btn");
  };

  const menuBtnInfo = [
    {
      name: "All",
      icon: <MdOutlineDashboard />,
    },
    {
      name: "Follow-up",
      icon: <BsStar />,
    },
    {
      name: "Draft",
      icon: <RiDraftLine />,
    },
    {
      name: "Sewing Cut",
      icon: <SiNike />,
    },
  ];

  return (
    <>
      <div className="header-main-area shadow text-dark flex items-center justify-between px-3 py-1">
        <h4>Teknovus Limited</h4>
        <HeaderAreaRightComponent />
      </div>

      <div className="header-main-area shadow bg-dark-light text-dark flex items-center justify-between px-2 pt-4 pb-3">
        <HeaderAreaLeftComponent headerTitle={"Order Management"} />
      </div>

      <div>
        <MenuHeaderComponent menuBtnInfo={menuBtnInfo} />
      </div>
    </>
  );
}

export default HeaderAreaComponent;
