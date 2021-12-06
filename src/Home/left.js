import React from "react"
import { Divider } from "antd"
// import { PushpinOutlined } from "@ant-design/icons"
import { Timeline } from "antd"

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
      label: "微信号",
      value: "yumengYang94",
    },
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

        <div className='others'>
          <h3>其它</h3>
          <div className='others-item'>
            <h5>GitHub</h5>
            <span>
              我在日常工作时间, 会把我做的项目的源码，以及前端的学习总结，
              和一些学习的其它知识, 做一个总结, 欢迎查看
            </span>
          </div>
          <div className='others-item'>
            <h5>博客</h5>
            <span>
              我会把日常中学习到的知识, 做一个总结成博客做一个记录,
              我学习前端技术的点滴,都记录在了简书, 已经写了将近
              <strong>8万字</strong> 的博客,以后有了更好的见解会继续更新
            </span>
          </div>
        </div>

        <div className='education'>
          <h3>教育背景</h3>
          <p>芜湖联大/专科(2012.9-2015.6)</p>
        </div>
      </div>
    </div>
  )
}

export default Left
