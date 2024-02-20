import React from "react"
import { Timeline } from "antd"

const Open: React.FC = () => {
  return (
    <div>
      <h4>开源项目</h4>
      <div className='content'>
        <Timeline
          items={[
            {
              children: (
                <>
                  <h3>React + Hooks + TypeScript UI 组件库</h3>
                  <p>项目地址: https://github.com/yym-yumeng123/ReactUI</p>
                  <p>
                    项目描述: 提供日常开发 <strong>20+</strong> UI组件,
                    减少造轮子, 让开发者拿来即用的组件库
                  </p>
                  <div className='content'>
                    <p>项目职责</p>
                    <ul className='list'>
                      <li>
                        1、提供开发日常常用UI组件20+, 使用 webpack 从 0 搭建
                      </li>
                      <li>
                        2、提供
                        <strong>
                          Button、Input、Toast、Checkbox、Modal、Popover、Table
                        </strong>
                        等常用组件
                      </li>
                      <li>
                        3、代码易读, api设置简单, 易于上手, 可以通过 500 多次的
                        commits来查看源码, 可以查看文档使用组件
                      </li>
                      <li>
                        4、已通过 <strong>npm publish</strong> 上传到个人仓库，
                        可以在开发环境使用
                      </li>
                    </ul>
                  </div>
                </>
              ),
            },
          ]}
        ></Timeline>
      </div>
    </div>
  )
}

export default Open
