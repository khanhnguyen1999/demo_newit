import React,{useContext} from 'react'
import {Table, Tag, Space} from 'antd'
import ButtonComponent from './ButtonComponent'
import {deleteTag} from '../services/apiTag'
import {AppContext} from '../context/AppContext'
import {Button} from 'react-bootstrap'

const TableComponent = ({data})=>{
    
    // const {_getId}  = useContext(AppContext);

    const _handleDelete = (id)=>{
      // _getId(id)
      // _showModal()
      // console.log("modal ",_showModal)
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
                  <Button onClick={()=>_handleDelete(id._id)} type="button" text="Delete">Delete</Button>
                </form>)
        },  
      ];

    return (
        <Table className="mb-3" columns={columns} dataSource={data} />
    )
}
export default TableComponent