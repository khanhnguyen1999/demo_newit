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
            render: (values) => {
              values.map((value)=>(
                <div key={value._id}>
                  <ButtonComponent className="mr-2" text="Edit"/>
                  <button onClick={_handleDelete(value._id)} type="submit" text="Delete">Delete</button>
                </div>
              )
            },
        },
      ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default TableComponent