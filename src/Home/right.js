import React from "react"
import BasicInfo from "../comonents/BasicInfo/basic_info"
import Skill from "../comonents/Skill/skill"
import Open from "../comonents/OpenSource/open"
// import { Card, Typography } from "antd"
import { Timeline } from "antd"
import "./index.scss"

const Right = () => {
  return (
    <div className='right'>
      <BasicInfo />
      <Skill />
      <Open />

      <div className='project'>
        <h4>工作及项目经历</h4>
        <Timeline>
          <Timeline.Item>
            <h3>平安智慧城(2019-08 ~ 至今)</h3>
            <p>
              在这里工作两年办的时间： 完成前端页面 100+，开发过多个系统模块
            </p>
            <br />
            <div className='experience-item'>
              <p>项目: Askbob人工智能问答系统</p>
              <ul className='list'>
                <li>
                  1、搭建前端项目架构，使用<strong>React + Hooks</strong>
                  开发，登录 Token， 配置请求，路由，以及和后端调试用户权限
                </li>
                <li>
                  2、完善各个模块的开发，完善智能问答的对话管理、意图配置、技能训练等模块
                </li>
                <li>
                  3、提取公用的业务组件，review 代码，封装 axios，
                  优化前端代码工作内容
                </li>
                <li>4、完善人工智能系统 ToC 模块， 搭建用户和系统的对话系统</li>
              </ul>
            </div>
            <div className='experience-item'>
              <p>专项资金：让用户可以审批客户提交的事项</p>
              <ul className='list'>
                <li>
                  1、该项目使用
                  <strong>Vue + vue-router + + vuex + Axios</strong>编写代码
                </li>
                <li>
                  2、在申请端使用<strong>表单设计器</strong>
                  来统一对请求表单配置，
                  减少开发，对后端返回数据进行封装，转化为Form表单,
                  需要开发用户定制化需求
                </li>
                <li>3、审批管理系统模块，</li>
              </ul>
            </div>
            <div className='experience-item'>
              <p>项目: 联合奖惩/行为要素/视频审查等</p>
              <ul className='list'>
                <li>
                  1、使用 <strong>umi + dva + React</strong>
                  编写代码，按照统一规范开发任务
                </li>
                <li>
                  2、开发不同系统各个模块的开发，对模块中定制化需求开发组件，
                </li>
                <li>
                  3、使用 <strong>Echarts</strong> 实现模块间的数据可视化
                </li>
                <li>4、完善人工智能系统 ToC 模块， 搭建用户和系统的对话系统</li>
              </ul>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <h3>移商智谷科技有限公司(2018-11 ~ 2019-07)</h3>
            <div className='experience-item'>
              <p>项目: 电商官网后台</p>
              <ul className='list'>
                <li>
                  1、独立完成负责项目从框架选型，到项目启动，配置不同的环境独立开发，完成复杂业务逻辑
                </li>
                <li>
                  2、使用 <strong>Vue</strong>，配置路由和 封装Axios， 使用 vuex
                  做状态管理， 实现多组件数据共享
                </li>
                <li>
                  3、封装统一的 api 接口，统一管理， 把常用功能封装为函数，
                  编写可复用的组件
                </li>
              </ul>
            </div>
          </Timeline.Item>
          {/* <Timeline.Item>
            <h3>海航科技公司(2018/3~2018/11)</h3>
            <div className='experience-item'>
              <p>项目: 海航云官网开发</p>
              <ul className='list'>
                <li>
                  1、负责前端页面的展示, 和 UI 沟通完成页面, 100% 按照 UI 图
                  来完成官网, 还原页面
                </li>
                <li>
                  2、使用 <strong>Vue</strong>，配置路由和 封装Axios， 使用 vuex
                  做状态管理， 实现多组件数据共享
                </li>
                <li>
                  3、封装统一的 api 接口，统一管理， 把常用功能封装为函数，
                  编写可复用的组件
                </li>
              </ul>
            </div>
          </Timeline.Item> */}
        </Timeline>
      </div>
    </div>
  )
}

export default Right
