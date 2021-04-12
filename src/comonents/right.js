import React from "react"
import { Card, Typography } from "antd"
import "./index.scss"

const Right = () => {
  const infos = [
    {
      label: "工作经验",
      value: "3年",
      link: false,
    },
    {
      label: "博客",
      value: "https://www.jianshu.com/u/5802949cb777",
      link: true,
    },
    {
      label: "GitHub",
      value: "https://github.com/yym-yumeng123",
      link: true,
    },
  ]
  return (
    <div className='right'>
      <div className='info bottom'>
        <h4>个人信息</h4>
        <div className='info-content'>
          {infos.map((item) => {
            return (
              <div className='item'>
                <span className='label'>{item.label}</span>
                {item.link ? (
                  <a>{item.value}</a>
                ) : (
                  <span className='value'>{item.value}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className='skill bottom'>
        <h4>技能</h4>
        <div className='content'>
          <p>
            熟悉页面制作技巧,
            能够编写具有语义化的页面,具有像素级还原设计稿的能力了解css常见布局,
            熟悉<strong>盒模型、浮动、定位、flex</strong>等
          </p>
          <p>
            熟悉掌握<strong>原生javaScript</strong>以及
            <strong>ES6</strong>语法, 有使用过
            <strong>原型、闭包、原型链、异步</strong>等的代码经验
          </p>
          <p>
            熟悉<strong>Vue以及Vue全家桶</strong> ，包括
            <strong>vue-router、vuex、 axios</strong> 等使用经验
          </p>
        </div>
      </div>
      <div className='work bottom'>
        <h4>工作经历</h4>
        <div className='content'>
          <section>
            <h5>平安智慧城(2019-08 ~ 至今)</h5>
          </section>
          <section>
            <h5>移商智谷科技有限公司(2018-11 ~ 2019-07)</h5>
          </section>
          <section>
            <h5>海航科技公司(2018-03 ~ 2018-11)</h5>
          </section>
        </div>
      </div>
      <div className='project bottom'>
        <h4>项目经历</h4>
      </div>
    </div>
  )
}

export default Right
