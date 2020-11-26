import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';    

const LoadingComponent = ()=>{
    const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
    return (
        <Spin indicator={antIcon} />
    )
}
export default LoadingComponent