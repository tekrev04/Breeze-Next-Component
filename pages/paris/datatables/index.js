import DataTableComponent from '@/components/paris/datatables'
import React, { Component } from 'react'


export default class DataTables extends Component {
    render() {
        return (
            
            <div className='container'>

                <h3 className='text-center font-bold'> TechRev 4.0 DataTable Component</h3>
                <div className='row mt-5'>
                    <div className='col-md-8'>

                        <div>
                            <h5>Component</h5>
                            <hr></hr>
                            <DataTableComponent />
                        </div>

                    </div>
                    <div className='col-md-4'>

                        <div>
                            <h5>How To</h5>
                            <hr></hr>
                            <h5 className='mb-3'> Dependencies </h5>
                            
                            <p><b># npm i react-bootstrap-table-next --save</b> </p>
                            Or 
                            <p><b> # yarn add react-bootstrap-table-next </b></p>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
