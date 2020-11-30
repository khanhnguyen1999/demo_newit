import React,{useContext} from 'react'
import {Table, Tag, Space} from 'antd'
import ButtonComponent from './ButtonComponent'
import {deleteTag} from '../services/apiTag'
import {AppContext} from '../context/AppContext'

const TableComponent = ({data})=>{
    
    const { _showModal,todos }  = useContext(AppContext);

    const _handleDelete = ()=>{
      _showModal()
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'tagName',
          name: 'tagName',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Action',
            render: (id) => (
                <form key={id._id}>
                  <ButtonComponent className="mr-2" text="Edit"/>
                  <button onClick={_handleDelete} type="button" text="Delete">Delete</button>
                </form>)
        },  
      ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default TableComponent