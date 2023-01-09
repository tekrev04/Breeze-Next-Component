import React from 'react'

function TypographyComponent() {
  return (
    <div className="container">
            {/* ********** bg-color ********** */}
            <section>
                <h6 className="bg-secondary text-center">Background Color Classes</h6>
                <div className="row">
                    <div className="col-2 border bg-primary text-white px-2 py-1 m-1 w-6">bg-primary</div>
                    <div className="col-2 border bg-secondary text-white px-2 py-1 m-1">bg-secondary</div>
                    <div className="col-2 border bg-success text-white px-2 py-1 m-1">bg-success</div>
                    <div className="col-2 border bg-info text-white px-2 py-1 m-1">bg-info</div>
                    <div className="col-2 border bg-warning text-dark px-2 py-1 m-1">bg-warning</div>
                    <div className="col-2 border bg-danger text-white px-2 py-1 m-1">bg-danger</div>
                    <div className="col-2 border bg-light text-dark px-2 py-1 m-1">bg-light</div>
                    <div className="col-2 border bg-dark text-white px-2 py-1 m-1">bg-dark</div>
                </div>
            </section>

            {/* ********** text ********** */}
            <section>
                <h6 className="bg-secondary text-center mt-5">Background Color Classes</h6>
                <div className="row">
                    <div className="col-2 border text-primary m-1">
                        <p>text-primary</p>
                    </div>
                    <div className="col-2 border text-secondary m-1">
                        <p>text-secondary</p>
                    </div>
                    <div className="col-2 border text-success m-1">
                        <p>text-success</p>
                    </div>
                    <div className="col-2 border text-info m-1">
                        <p>text-info</p>
                    </div>
                    <div className="col-2 border text-warning m-1">
                        <p>text-warning</p>
                    </div>
                    <div className="col-2 border text-danger m-1">
                        <p>text-danger</p>
                    </div>
                    <div className="col-2 border text-dark m-1">
                        <p>text-dark</p>
                    </div>
                    <div className="col-2 border text-deactive m-1">
                        <p>text-deactive</p>
                    </div>
                    <div className="col-2 border text-white bg-dark m-1">
                        <p>text-white</p>
                    </div>
                </div>
            </section>

            {/* ********** Button ********** */}
            <h6 className="bg-secondary text-center mt-5">Buttons [btn]</h6>
            <section>
                {/* button without icon */}
                <button className="btn btn-primary">
                    <div className="btn-flex">
                        btn btn-primary
                        <span>{/* <i className="bx bx-plus"></i> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-success">
                    <div className="btn-flex">
                        btn btn-success
                        <span>
                            <i className="bx bx-plus"></i>
                        </span>
                    </div>
                </button>

                {/* button without icon */}
                <button className="btn btn-info">
                    <div className="btn-flex">
                        btn btn-info
                        <span>{/* <i className="bx bx-plus"></i> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-warning">
                    <div className="btn-flex">
                        btn btn-warning
                        <span>
                            <i className="bx bx-plus"></i>
                        </span>
                    </div>
                </button>

                {/* button without icon */}
                <button className="btn btn-danger">
                    <div className="btn-flex">
                        btn btn-danger
                        <span>{/* <i className="bx bx-plus"></i> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-disable">
                    <div className="btn-flex">
                        btn btn-disable
                        <span>
                            <i className="bx bx-plus"></i>
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
  )
}

export default TypographyComponent;