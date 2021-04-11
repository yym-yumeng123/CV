import React from "react"
import { Divider } from "antd"
// import { PushpinOutlined } from "@ant-design/icons"
import "./index.scss"

const Left = () => {
  const concats = [
    {
      label: "手机",
      value: "18026493873",
    },
    {
      label: "邮箱",
      value: "18026493873@163.com",
    },
    {
      label: '微信号',
      value: 'yumengYang94'
    }
  ]



  return (
    <div className='left'>
      <div className='header'>
        <h1>杨雨蒙</h1>
        <p>前端开发工程师</p>
      </div>
      <div className='main'>
        <div className='concat'>
          <h3>联系方式</h3>
          <div className='content'>
            {concats.map((item) => {
              return (
                <div className='item'>
                  <span className='label'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </div>
              )
            })}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Left
