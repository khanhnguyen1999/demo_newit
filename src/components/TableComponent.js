import React from 'react'
import {Table, Tag, Space} from 'antd'
import ButtonComponent from './ButtonComponent'

const TableComponent = ({data})=>{

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
                <ButtonComponent type="danger" text="Delete"/>
              </div>
            ),
        },
      ];
      
    //   const data = [];
      
    console.log("data table",data)
    return (
        <Table columns={columns} dataSource={data} />
    )
}
export default TableComponent