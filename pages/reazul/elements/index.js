import ElementsComponent from "@/components/reazul/elements";
import TypographyComponent from "@/components/reazul/elements/typography";
import ReazulNavComponent from "@/components/reazul/navs/ReazulNavComponent";
import React, { Component } from "react";

export default class Elements extends Component {
    render() {
        return (
            <div className="container">
                <ReazulNavComponent />
                <h3 className="text-center font-bold text-red-500"> TechRev 4.0 DataTable Component</h3>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div>
                            <h5>Component</h5>
                            <hr></hr>
                            <ElementsComponent />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h5>How To || Dependencies</h5>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
