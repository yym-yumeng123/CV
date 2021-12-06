import React from "react"
import { Timeline } from "antd"

const Open = () => {
  return (
    <div className='work bottom'>
      <h4>开源项目</h4>
      <div className='content'>
        <Timeline>
          <Timeline.Item>
            <h3>React + Hooks + TypeScript UI 组件库</h3>
            <p>
              <strong>
                项目地址：https://github.com/yym-yumeng123/ReactUI
              </strong>
            </p>
            <p>
              <strong>项目描述：</strong> 让开发者使用的
              <strong>React UI 组件库</strong>
            </p>
            <div className='content'>
              <p>
                <strong>项目职责</strong>
              </p>
              <ul className='list'>
                <li>1、提供开发日常常用UI组件15+， 使用 webpack 搭建</li>
                <li>
                  2、提供
                  <strong>Button、Input、Toast、Checkbox、Table</strong>
                  等常用组件
                </li>
                <li>
                  3、代码易读, api设置简单, 易于上手, 可以通过几百次的
                  commits来查看源码， 可以查看文档
                </li>
                <li>4、减少日常开发重复任务，可定制化操作自己的 UI组件</li>
                <li>
                  5、已通过 <strong>npm publish</strong> 上传到个人仓库，
                  可以在开发环境使用
                </li>
              </ul>
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default Open
