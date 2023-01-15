import React, { useState } from "react";

const MenuHeaderComponent = (props) => {
  const { menuBtnInfo } = props;
  const [activeButton, setActiveButton] = useState(0);

  return (
    <>
      {menuBtnInfo.map((buttonInfo, index) => (
        <button
          key={index}
          className={`btn ${activeButton === index ? "menu-btn-active" : "menu-btn"}`}
          onClick={() => setActiveButton(index)}
        >
          <div className="flex">
            <span className="pt-1 pr-2">{buttonInfo.icon}</span>
            {buttonInfo.name}
          </div>
        </button>
      ))}
    </>
  );
};
export default MenuHeaderComponent;
