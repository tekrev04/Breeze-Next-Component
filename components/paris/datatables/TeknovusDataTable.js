import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
function DataTableComponent({ data, columns, classes }) {
  return (
    <div className="tv-datatable-wrapper">
      <div className="table-responsive">
        <BootstrapTable classes={classes}
          noDataIndication="No data found"
          bootstrap4
          bordered
          tabIndexCell
          condensed keyField='id' data={data} columns={columns} />
      </div>
    </div>
  )
}

export default DataTableComponent