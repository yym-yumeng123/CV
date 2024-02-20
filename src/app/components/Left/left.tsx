import React from "react"
import styles from "./left.module.css"

const concats: Array<{
  label: string
  value: string
}> = [
  {
    label: "手机",
    value: "18026493873",
  },
  {
    label: "邮箱",
    value: "18026493873@163.com",
  },
]

export default function Left() {
  return (
    <aside className={styles.left}>
      <header className={styles.header}>
        <h1>杨雨蒙</h1>
        <p>前端开发工程师</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h3>联系方式</h3>
          <div className={styles.concat}>
            {concats.map((item) => {
              return (
                <div key={item.label}>
                  <span className={styles.label}>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className={styles.section}>
          <h3>博客</h3>
          <ul>
            <li>1. 平时学习技术有记录博客的习惯, 温故而知新</li>
            <li>
              2. 博客已经写了<strong>100+</strong>篇文章,{" "}
              <strong>100000+</strong>字数的记录{" "}
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>GitHub</h3>
          <ul>
            <li>
              1. 在日常工作时间, 会把我做的项目的源码，以及前端的学习总结, 会在
              GitHub 做一个记录
            </li>
            <li>
              2. 完善自己的 ReactUI 组件库, <strong>500+</strong>commits,
              <strong>20+</strong>常用UI组件
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>教育背景</h3>
          <p>芜湖联大/专科(2012.9-2015.6)</p>
        </section>
      </main>
    </aside>
  )
}
