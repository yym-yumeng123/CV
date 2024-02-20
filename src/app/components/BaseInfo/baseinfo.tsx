import React from "react"
import styles from "./baseinfo.module.css"

const infos = [
  {
    label: "姓名",
    value: "杨雨蒙/男/1994",
  },
  {
    label: "工作经验",
    value: "5年",
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

const BasicInfo = () => {
  return (
    <div className={styles.info}>
      <h4>个人信息</h4>
      <div className={styles.info_content}>
        {infos.map((item) => {
          return (
            <div className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BasicInfo
