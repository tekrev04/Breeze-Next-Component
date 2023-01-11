import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchComponent(props) {
    const { onClick } = props;
    return (
        <div className="teknovus-input-group icon-area">
            <i className="input-icon-right teknovus-icon cursor-pointer" onClick={onClick}>
                {/* <FiSearch /> */}
                <FiSearch onClick={onClick} />
            </i>
            <input type="text" className="teknovus-input border-all" placeholder="Search" />
        </div>
    );
}

export default SearchComponent;
