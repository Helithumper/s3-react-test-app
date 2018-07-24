import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './TestDataTable.css'
import axios from 'axios'

export default class TestDataTable extends React.Component {
    constructor(props) {
        super(props)
        this.reload = this.reload.bind(this)

        this.state = {
            data: [],
            columns: [
                {
                    Header: "Name",
                    accessor: "name"
                },{
                    Header: "Color",
                    accessor: "color"
                }
            ],
            loading: false
        }
    }
    reload() {
        this.setState({loading:true})
        axios({
            url: 'https://rpyxzhzhj7.execute-api.us-east-1.amazonaws.com/default/TestData',
            method: 'GET'
        })
            .then(result => {
                console.table(result.data.Items)
                this.setState({ data: result.data.Items, loading:false});
            })
            .catch((err) => {
                console.log(err)
            })
        return
    }

    componentDidMount() {
        this.reload()
    }

    render() {
            return (
                <div className="table-view">
                    <ReactTable
                        loading={this.state.loading}
                        data={this.state.data}
                        columns={this.state.columns}
                        className="-striped -highlight"
                        minRows={10}
                    />
                </div>
            )
    }
}