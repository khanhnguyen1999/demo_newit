import React,{useContext} from 'react'
import {Table, Tag, Space} from 'antd'
import ButtonComponent from './ButtonComponent'
import {deleteTag} from '../services/apiTag'
import {AppContext} from '../context/AppContext'
import {Button} from 'antd'

const TableComponent = ({data})=>{
    
    const {_getId,_showModalDelete,_showModalUpdate}  = useContext(AppContext);

    const _handleDelete = (id)=>{
      _getId(id)
      _showModalDelete()
    }
    const _handleUpdate = (id)=>{
      _getId(id)
      _showModalUpdate()
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
                  <Button onClick={()=>_handleUpdate(id._id)} className="mr-2" text="Edit">Edit</Button>
                  <Button onClick={()=>_handleDelete(id._id)} type="danger" text="Delete">Delete</Button>
                </form>)
        }
      ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default TableComponent