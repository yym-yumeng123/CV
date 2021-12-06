import React from "react"
import { Timeline } from "antd"

const Skill = () => {
  return (
    <div className='skill bottom'>
      <h4>技能</h4>
      <div className='content'>
        <Timeline>
          <Timeline.Item>
            <h3>HTML/CSS</h3>
            <p>
              熟悉页面制作技巧,
              能够编写具有语义化的页面,具有像素级还原设计稿的能力了解css常见布局,
              熟悉<strong>盒模型、浮动、定位、flex</strong>等
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <h3>JavaScript/ES6</h3>
            <p>
              有扎实的JS基础, 能够熟练使用 <strong>ES6语法</strong>, 有使用过
              <strong>原型、闭包, Promise</strong>等的代码经验, 熟悉{" "}
              <strong>事件模型、DOM操作、Ajax</strong>等
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <h3>Vue 全家桶</h3>
            <p>
              熟悉<strong>Vue以及Vue全家桶</strong> ，包括
              <strong>vue-router、vuex、 axios</strong> 等以及{" "}
              <strong>Vue</strong> 组件化开发模式 并在项目中实际运用使用过，
              <strong>Vue 封装过 UI 组件以及 业务组件</strong>
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <h3>React/React Hooks</h3>
            <p>
              了解并使用过 <strong>React Class 和 React Hooks</strong>
              开发项目， 并手写 <strong>React + TypeScript UI 组件</strong>
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default Skill
