import React from 'react'
import {Table, Tag, Space} from 'antd'
import ButtonComponent from './ButtonComponent'

const TableComponent = ({data})=>{

    const _handleDelete = (id)=>{
      console.log("get id ",id)
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
            render: (id) => {
                return (
                <form onSubmit={_handleDelete(id._id)} key={id._id}>
                  <ButtonComponent className="mr-2" text="Edit"/>
                  <button type="submit" text="Delete">Delete</button>
                </form>)
              }
        },  
      ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default TableComponent