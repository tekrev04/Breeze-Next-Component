import React, { Component } from 'react'
const $ = require('jquery');
const DataTable = require('datatables.net-bs5');

export default class TeknovusDataTable extends Component {

  
  constructor(props) {

    super(props);
    this.state = {

        activity: true,
    }
    this.myRef = React.createRef();
  }

  componentDidMount() {

    $(this.myRef.current).DataTable({
      data: this.props.data,
      columns: this.props.columns,
      "bDestroy": true,
      searching: true,

    });

    this.setState({activity: false})
  }
  render() {

    const { data } = this.props;

    if(this.activity){
       return(<div></div>)
    }
    return (
      <div>
        <table className='table table-bordered dtTable teknovus-table' ref={this.myRef}/>
      </div>
    )
  }
}
