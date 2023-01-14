import ElementsComponent from "@/components/reazul/elements";
import TypographyComponent from "@/components/reazul/elements/typographyComponent";
import ReazulNavComponent from "@/components/reazul/navs/ReazulNavComponent";
import React, { Component } from "react";

export default class Elements extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="card p-3">
                    <ReazulNavComponent />
                    <h3 className="text-center font-bold text-red-500"> TechRev 4.0 DataTable Component</h3>
                    <div className="row mt-5">
                        <div className="col-md-9">
                            <div>
                                <h5>Component</h5>
                                <hr />
                                <ElementsComponent />
                            </div>
                        </div>
                        <div className="col-md-3 p-0 m-0">
                            <div>
                                <h5>How To || Dependencies</h5>
                                <hr />

                                <i>For bg-color, text-color just use className</i>
                                <hr />

                                <p>
                                    1.For <b>Button</b> use Template button
                                </p>
                                <p>2.If you don't need icon just comment only icon</p>
                                <p>
                                    3.For icon must use <b>React Icon</b> and import your icon from{" "}
                                    <a href="https://react-icons.github.io/react-icons" target="_blank">
                                        this website
                                    </a>
                                </p>
                                <hr />

                                <b>Dependencies</b>
                                <br />
                                <i>yarn add react-icons --save</i>
                                <p className="p-0 m-0 text-red-400">OR</p>
                                <i>npm install react-icons --save</i>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
