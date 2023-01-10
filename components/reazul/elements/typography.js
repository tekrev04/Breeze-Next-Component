import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";

// background-area
const bg_primary = "bg-primary text-white";
const bg_secondary = "bg-secondary text-white";
const bg_success = "bg-success text-white";
const bg_info = "bg-info text-white";
const bg_warning = "bg-warning text-dark";
const bg_danger = "bg-danger text-white";
const bg_light = "bg-light text-dark";
const bg_dark = "bg-dark text-white";

// text-area
const text_primary = "text-primary";
const text_secondary = "text-secondary";
const text_success = "text-success";
const text_info = "text-info";
const text_warning = "text-warning";
const text_danger = "text-danger";
const text_dark = "text-dark";
const text_deactive = "text-deactive";
const text_white = "text-white";

function TypographyComponent() {
    return (
        <div className="container">
            {/* ********** bg-color ********** */}
            <section>
                <h6 className="bg-secondary text-center">Background Color Classes</h6>
                <div className="row">
                    <CopyToClipboard text={bg_primary} onCopy={() => alert(`${bg_primary}`)}>
                        <div className="col-2 border bg-primary text-white px-2 py-1 m-1 cursor-pointer">
                            bg-primary
                        </div>
                    </CopyToClipboard>

                    <CopyToClipboard text={bg_secondary} onCopy={() => alert(`${bg_secondary}`)}>
                        <div className="col-2 border bg-secondary text-white px-2 py-1 m-1 cursor-pointer">
                            bg-secondary
                        </div>
                    </CopyToClipboard>

                    <CopyToClipboard text={bg_success} onCopy={() => alert(`${bg_success}`)}>
                        <div className="col-2 border bg-success text-white px-2 py-1 m-1 cursor-pointer">
                            bg-success
                        </div>
                    </CopyToClipboard>

                    <CopyToClipboard text={bg_info} onCopy={() => alert(`${bg_info}`)}>
                        <div className="col-2 border bg-info text-white px-2 py-1 m-1 cursor-pointer">bg-info</div>
                    </CopyToClipboard>

                    <CopyToClipboard text={bg_warning} onCopy={() => alert(`${bg_warning}`)}>
                        <div className="col-2 border bg-warning text-dark px-2 py-1 m-1 cursor-pointer">bg-warning</div>
                    </CopyToClipboard>

                    <CopyToClipboard text={bg_danger} onCopy={() => alert(`${bg_danger}`)}>
                        <div className="col-2 border bg-danger text-white px-2 py-1 m-1 cursor-pointer">bg-danger</div>
                    </CopyToClipboard>

                    <CopyToClipboard text={bg_light} onCopy={() => alert(`${bg_light}`)}>
                        <div className="col-2 border bg-light text-dark px-2 py-1 m-1 cursor-pointer">bg-light</div>
                    </CopyToClipboard>

                    <CopyToClipboard text={bg_dark} onCopy={() => alert(`${bg_dark}`)}>
                        <div className="col-2 border bg-dark text-white px-2 py-1 m-1 cursor-pointer">bg-dark</div>
                    </CopyToClipboard>
                </div>
            </section>

            {/* ********** text ********** */}
            <section>
                <h6 className="bg-secondary text-center mt-5">Background Color Classes</h6>
                <div className="row">
                    <CopyToClipboard text={text_primary} onCopy={() => alert(`${text_primary}`)}>
                        <div className="col-2 border text-primary m-1 cursor-pointer">
                            <p>text-primary</p>
                        </div>
                    </CopyToClipboard>

                    <CopyToClipboard text={text_secondary} onCopy={() => alert(`${text_secondary}`)}>
                        <div className="col-2 border text-secondary m-1 cursor-pointer">
                            <p>text-secondary</p>
                        </div>
                    </CopyToClipboard>

                    <CopyToClipboard text={text_success} onCopy={() => alert(`${text_success}`)}>
                        <div className="col-2 border text-success m-1 cursor-pointer">
                            <p>text-success</p>
                        </div>
                    </CopyToClipboard>

                    <CopyToClipboard text={text_info} onCopy={() => alert(`${text_info}`)}>
                        <div className="col-2 border text-info m-1 cursor-pointer">
                            <p>text-info</p>
                        </div>
                    </CopyToClipboard>
                    <CopyToClipboard text={text_warning} onCopy={() => alert(`${text_warning}`)}>
                        <div className="col-2 border text-warning m-1 cursor-pointer">
                            <p>text-warning</p>
                        </div>
                    </CopyToClipboard>
                    <CopyToClipboard text={text_danger} onCopy={() => alert(`${text_danger}`)}>
                        <div className="col-2 border text-danger m-1 cursor-pointer">
                            <p>text-danger</p>
                        </div>
                    </CopyToClipboard>
                    <CopyToClipboard text={text_dark} onCopy={() => alert(`${text_dark}`)}>
                        <div className="col-2 border text-dark m-1 cursor-pointer">
                            <p>text-dark</p>
                        </div>
                    </CopyToClipboard>
                    <CopyToClipboard text={text_deactive} onCopy={() => alert(`${text_deactive}`)}>
                        <div className="col-2 border text-deactive m-1 cursor-pointer">
                            <p>text-deactive</p>
                        </div>
                    </CopyToClipboard>
                    <CopyToClipboard text={text_white} onCopy={() => alert(`${text_white}`)}>
                        <div className="col-2 border text-white bg-dark m-1 cursor-pointer">
                            <p>text-white</p>
                        </div>
                    </CopyToClipboard>

                    <div className="col-2 border text-deactive m-1 cursor-pointer">
                        <p>text-deactive</p>
                    </div>
                </div>
            </section>

            {/* ********** Button ********** */}
            <h6 className="bg-secondary text-center mt-5">Buttons [btn]</h6>
            <section>
                {/* button without icon */}
                <button className="btn btn-success">
                    <div className="btn-flex">
                        btn btn-primary
                        <span>
                            <BsPlusLg/>
                            </span>
                    </div>
                </button>
            

                {/* button with icon */}
                <button className="btn btn-success">
                    <div className="btn-flex">
                        btn btn-success
                        <span>
                            <BsPlusLg />
                        </span>
                    </div>
                </button>

                {/* button without icon */}
                <button className="btn btn-info">
                    <div className="btn-flex">
                        btn btn-info
                        <span>{/* <BsPlusLg/> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-warning">
                    <div className="btn-flex">
                        btn btn-warning
                        <span>
                            <BsPlusLg />
                        </span>
                    </div>
                </button>

                {/* button without icon */}
                <button className="btn btn-danger">
                    <div className="btn-flex">
                        btn btn-danger
                        <span>{/* <BsPlusLg/> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-disable">
                    <div className="btn-flex">
                        btn btn-disable
                        <span>
                            <BsPlusLg />
                        </span>
                    </div>
                </button>
            </section>

            {/* ********** Badge ********** */}
            <h6 className="bg-secondary text-center mt-5">Badges-Pill [badge]</h6>
            <section>
                <span className="badge bg-primary">badge bg-primary</span>
                <span className="badge bg-secondary">badge bg-secondary</span>
                <span className="badge bg-success">badge bg-success</span>
                <span className="badge bg-info">badge bg-info</span>
                <span className="badge bg-warning text-dark">badge bg-warning text-dark</span>
                <span className="badge bg-danger">badge bg-danger</span>
                <span className="badge bg-dark">badge bg-dark</span>
            </section>
        </div>
    );
}

export default TypographyComponent;
