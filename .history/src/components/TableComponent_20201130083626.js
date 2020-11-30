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
            render: (id) => (
              <div id={id}>
                <ButtonComponent className="mr-2" text="Edit"/>
                <ButtonComponent onClick={_handleDelete(id)} type="danger" text="Delete"/>
              </div>
            ),
        },
      ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default TableComponent