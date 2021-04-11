import React from "react"
// import { PushpinOutlined } from "@ant-design/icons"
import "./index.scss"

const Right = () => {
  const infos = [
    {
      label: "工作经验",
      value: "3年",
    },
    {
      label: "博客",
      value: "https://www.jianshu.com/u/5802949cb777",
    },
    {
      label: "GitHub",
      value: "https://github.com/yym-yumeng123",
    },
  ]
  return (
    <div className='right'>
      <div className='info'>
        <h4>
          个人信息
        </h4>
        <div className='info-content'>
          <p>杨雨蒙/男/1994</p>
          {infos.map((item) => {
            return (
              <div className='item'>
                <span className='label'>{item.label}</span>
                <span className='value'>{item.value}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="skill">
        <h4>技能</h4>
      </div>
      <div className="work">
        <h4>工作经历</h4>
      </div>
      <div className="project">
        <h4>项目经历</h4>
      </div>
    </div>
  )
}

export default Right
