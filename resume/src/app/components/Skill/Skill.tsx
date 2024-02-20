import React, { FC } from "react"
import { Timeline, ConfigProvider } from "antd"
import styles from "../Right/right.module.css"

const Skill: FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Timeline: {
            itemPaddingBottom: 8,
          },
        },
      }}
    >
      <div>
        <h4>个人技能</h4>
        <div className={styles.skill}>
          <Timeline
            className={styles.time}
            items={[
              {
                children: (
                  <>
                    <h3>HTML/CSS</h3>
                    <p>
                      熟悉页面制作技巧,
                      能够编写具有语义化的页面,具有像素级还原设计稿的能力了解css常见布局,
                      熟悉<strong>盒模型、浮动、定位、flex</strong>等
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <h3>JavaScript/ES6+/TypeScript</h3>
                    <p>
                      有扎实的 <strong>JavaScript</strong> 基础, 能够熟练使用
                      <strong>ES6+语法</strong>, 遵循代码规范, 可读性良好,
                      并有使用<strong>TypeScript</strong>的经验
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <h3>React</h3>
                    <p>
                      熟悉常用技术栈 <strong>React、React Hooks</strong>, 了解
                      <strong> React Native</strong> 开发
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <h3>Node</h3>
                    <p>
                      了解 Node, 有使用 <strong>Next.js</strong> 框架, 有良好的
                      RESTful API 设计规范
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <h3>HTTP</h3>
                    <p>
                      了解http协议,
                      能够根据http请求报文、响应报文和状态码排查问题
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <h3>Git/Webpack</h3>
                    <p>
                      熟悉 <strong>Git</strong> 操作, 使用 Git 来进行协同开发;
                      了解使用 <strong>Webpack </strong>
                      模块打包工具, 能够自行搭建项目
                    </p>
                  </>
                ),
              },
            ]}
          ></Timeline>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Skill
