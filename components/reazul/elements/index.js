import React from "react";
import TypographyComponent from "./typography";
import ButtonComponent from "./buttonComponent";
import { BsPlusLg } from "react-icons/bs";

function ElementsComponent() {
    const onClick = () => {
        console.log("clicked btn");
    };
    return (
        <div>
            {/* <TypographyComponent /> */}
            <ButtonComponent
                className={"outline-primary"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
            <ButtonComponent
                className={"outline-primary"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />
            
            <ButtonComponent
                className={"outline-success"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
            <ButtonComponent
                className={"outline-success"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />
            
            <ButtonComponent
                className={"outline-info"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
            <ButtonComponent
                className={"outline-info"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />
            
            <ButtonComponent
                className={"outline-warning"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
            <ButtonComponent
                className={"outline-warning"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />
            
            <ButtonComponent
                className={"outline-danger"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
            <ButtonComponent
                className={"outline-danger"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />

            <ButtonComponent
                className={"btn-primary"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />

            <ButtonComponent
                className={"btn-primary"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />

            <ButtonComponent
                className={"btn-success"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />

            <ButtonComponent
                className={"btn-success"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />

            <ButtonComponent
                className={"btn-info"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />

            <ButtonComponent
                className={"btn-info"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />

            <ButtonComponent
                className={"btn-danger"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />

            <ButtonComponent
                className={"btn-danger"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />

            <ButtonComponent
                className={"btn-warning"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={true}
            />

            <ButtonComponent
                className={"btn-warning"}
                btnText={"btn-primary"}
                btnIcon={<BsPlusLg />}
                onClick={onClick}
                disabled={false}
            />
        </div>
    );
}

export default ElementsComponent;
