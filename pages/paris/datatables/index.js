import { user_data } from '@/components/paris/datatables/data'
import TeknovusDataTable from '@/components/paris/datatables/TeknovusDataTable'
import ParisNavComponent from '@/components/paris/navs/ParisNavComponent'
import React, { Component } from 'react'


export default class DataTablesPage extends Component {

    constructor(props) {

        super(props)
        this.state = {

            activity: true,
            dbResponse: [],

        }
    }

    componentDidMount() {

        let products = user_data;

        this.setState({ dbResponse: products, activity: false })
    }
    _getColumn() {

        const columns = [{
            dataField: 'id',
            text: 'ID',
            classes: "fs-12 text-dark text-600"
        }, {
            dataField: 'style_id',
            text: 'Style ID',
            classes: "fs-12 text-dark text-600 text-center"
        }, {
            dataField: 'buyer_name',
            text: 'Buyer Name',
            classes: "fs-12 text-dark text-600"
        }];

        return columns;

    }


    render() {

        if (this.state.activity) {

            return <>Loading</>
        }

        const { dbResponse } = this.state;

        return (

            <div className='container mt-5'>
                
                <div className='card p-3'>
                <ParisNavComponent />
                <h3 className='text-center font-bold'> TechRev 4.0 DataTable Component</h3>
                <div className='row mt-5'>
                    <div className='col-md-8'>

                        <div>
                            <h5>Component</h5>
                            <hr></hr>
                            <TeknovusDataTable 
                            data={dbResponse}
                            columns={this._getColumn()} 
                            classes="teknovus-table" />
                        </div>

                    </div>
                    <div className='col-md-4'>

                        <div>
                            <h5>How To</h5>
                            <hr></hr>
                            <h5 className='mb-3'> Dependencies </h5>

                            <p><b> # yarn add react-bootstrap-table-next react-bootstrap-table2-paginator </b></p> 
                            <hr></hr>
                            <h5 className='mb-3 mt-3'> Syntax </h5>

                            <code>
                                &lt;TeknovusDataTable&frasl;&gt;
                            </code>

                            <h5 className='mb-3 mt-3'> Props </h5>
                            <p><b> <span className='text-danger'> Required </span>. data</b> [Array of object]</p>
                            <p className='fs-12 text-muted'><b>data</b> must be an array of object having unique id property. </p>

                            <p><b> <span className='text-danger'> Required </span>. columns </b> [Array of object]</p>
                            <p className='fs-12'><b>data</b> must be an array of object having  columnd defination with two mendatory property <b>dataField - string (represent jso property name)</b> and text - sting (column name)</p>
                            <p> Check  <a href='https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/column-props.html' target="_blank">here</a> for advance examples</p>


                        </div>

                    </div>
                </div>
                </div>

            </div>
        )
    }
}
