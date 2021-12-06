import React from "react"
import "./basic.scss"

const infos = [
  {
    label: "姓名",
    value: "杨雨蒙/男/1994",
    link: false,
  },
  {
    label: "工作经验",
    value: "3年半",
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

const BasicInfo = () => {
  return (
    <div className='info bottom'>
      <h4>个人信息</h4>
      <div className='info-content'>
        {infos.map((item) => {
          return (
            <div className='item'>
              <span className='label'>{item.label}</span>
              {item.link ? (
                <a href={item.value}>{item.value}</a>
              ) : (
                <span className='value'>{item.value}</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BasicInfo
