import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationListStandalone, PaginationProvider, PaginationTotalStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

function TeknovusDataTable(props) {

  const {
    data,
    columns,
    classes
  } = props;

  const paginationOptions = {
    custom: true,
    sizePerPage: 10,
    firstPageText: 'First',
    prePageText: ' ← ',
    nextPageText: '→',
    lastPageText: "Last",
    totalSize: props.data.length,
    sizePerPageRenderer: SizePerPageRenderer,
    paginationTotalRenderer: PaginaTotalRenderer,
    pageButtonRenderer: PageButtonRenderer,
    hidePageListOnlyOnePage: true,
    sizePerPageList: [
      {
        text: '10', value: 10
      }, {
        text: '15', value: 15
      }, {
        text: '20', value: 20
      },
      {
        text: '25', value: 25
      }
    ]
  }
  const dataTable = ({ paginationProps, paginationTableProps }) => {

    return (
      <div>
        <PaginationRow {...paginationProps} />
        <div>
          <BootstrapTable
            classes={classes}
            noDataIndication="No data found"
            bootstrap4
            bordered
            tabIndexCell
            condensed
            keyField='id'
            data={data}
            columns={columns}
            {...paginationTableProps} 
          />
        </div>
        <div className='mt-3'>
          <PaginationRow {...paginationProps} />
        </div>
      </div>
    )
  };

  return (

    <div className="tv-datatable-wrapper">

      <PaginationProvider
        pagination={
          paginationFactory(paginationOptions)
        }
      >
       {dataTable}
      </PaginationProvider>

    </div>
  )
}
const PaginationRow = function (props) {

  return (
    <div className='row'>
      <div className='col-md-6'>
        <div className='d-flex flex-row justify-content-start align-items-center'>
          <div className='me-2'>
            <SizePerPageDropdownStandalone {...props} />
          </div>
          <div>
            <PaginationTotalStandalone {...props} />
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='d-flex flex-row justify-content-end align-items-center'>
          <PaginationListStandalone {...props} />
        </div>
      </div>
    </div>
  )

}

const PaginaTotalRenderer = function (from, to, size) {

  return (
    <span onClick={() => { console.log(from) }} className="react-bootstrap-table-pagination-total">
      {from} - {to} of {size}
    </span>
  )
}

const SizePerPageRenderer = function ({ options, currSizePerPage, onSizePerPageChange }) {

  return (
    <div>
      <select className="" onChange={(e) => { onSizePerPageChange(parseInt(e.target.value)) }}>
        {

          options.map((option) => {

            return (
              <option key={option.text} value={option.value}>  {option.text} </option>
            );
          })
        }
      </select>

    </div>
  )
}

const PageButtonRenderer = function ({ page, active, disable, title, onPageChange }) {

  let is_active = "";

  if (active) {
    is_active = "active";
  } else {
    is_active = "";
  }
  if (typeof page === 'string') {
    is_active = "";
  }

  return (
    <li className="paginate_button page-item" key={page}>
      <a href="#" onClick={(e) => { e.preventDefault(); onPageChange(page) }} className={`${is_active} page-link`}>{page}</a>
    </li>
  );
}

export default TeknovusDataTableWorking