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
              <p className='ex-title'>项目1: Askbob人工智能问答系统</p>
              <ul className='list'>
                <li>
                  1、项目目的主要以通过算法训练机器人来完成用户的常规问题解答,
                  通过设置 对话模板、意图、词槽、词典等完善人工智能
                </li>
                <li>
                  2、我在这个项目负责了前期界面研究，与产品商量原型设计，给出技术预研,，配合后台开发人员设计界面与开发功能，并负责框架开发，封装公共组件，以及根据需要引进第三方插件。
                </li>
                <li>
                  3、这个项目遇到的最大困难是前端页面需求变化比较快,
                  需要和UI及时配合
                </li>
                <li>
                  4、该项目我采用了<strong>React</strong>
                  开发方案，并搭配 <strong>umi 和 dva 来管理数据</strong>
                  在细节上配置请求，路由，以及和后端调试用户权限, 使用 scss
                  来简化css书写, 提取公用的业务组件，review 代码，封装
                  axios，放在不同的文件下来管理项目
                </li>
                <li>5、完善人工智能系统 ToC 模块， 搭建用户和系统的对话系统</li>
              </ul>
            </div>
            <div className='experience-item'>
              <p className='ex-title'>
                项目2: 专项资金 用户可以审批客户提交的事项
              </p>
              <ul className='list'>
                <li>
                  1、项目目的主要是客户通过申请端来办公,
                  需要工作人员审批的申请端以及审批端的模块开发
                </li>
                <li>
                  2、我在此项目负责审批端工作审批模块, 以及事项管理模块等,
                  配合后台人员开发功能, 并提取其他页面需要用到的公共业务组件开发
                </li>
                <li>
                  3、在项目中遇到的困难是客户对审批流程不清晰,
                  以及在需求的更改上比较频繁, 需要及时响应
                  审批管理系统模块，完善项目审批模块, 获取用户提交记录,
                  进行处理不同的流程节点,并对不同事项不同情形处理
                </li>
                <li>
                  4、该项目审批端使用
                  <strong>Vue + vue-router + + vuex + Axios</strong>编写代码,
                  在申请端使用<strong>表单设计器</strong>
                  来统一对请求表单配置，
                  减少开发，对后端返回数据进行封装，转化为Form表单,
                  需要开发用户定制化需求, 采用组件化的方式开发,
                  减少代码之间的耦合度
                </li>
              </ul>
            </div>
            <div className='experience-item'>
              <p className='ex-title'>项目3: 联合奖惩/行为要素/视频审查等</p>
              <ul className='list'>
                <li>
                  1、使用 <strong>umi + dva + React</strong>
                  编写代码，按照统一规范开发任务
                </li>
                <li>
                  2、使用 <strong>React Class </strong>
                  组件的方式开发不同系统各个模块，对模块中定制化需求开发组件，
                </li>
                <li>
                  3、使用 <strong>Echarts</strong> 在首页展现采集模块数据,使用
                  柱状图, 折线图, 饼状图多维度展示数据变化
                </li>
              </ul>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <h3>移商智谷科技有限公司(2018-11 ~ 2019-07)</h3>
            <div className='experience-item'>
              <p className='ex-title'>项目: 电商官网后台</p>
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
                <li>
                  4、工具类与业务类分开，降低与具体业务的耦合，回归工具本身
                </li>
              </ul>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <h3>海航科技公司(2018/3~2018/9)</h3>
            <div className='experience-item'>
              <p className='ex-title'>项目: 海航云官网开发/后台管理系统开发</p>
              <ul className='list'>
                <li>
                  1、负责官网页面的展示, 和 UI 沟通完成页面, 100% 按照 UI 图
                  来完成官网, 还原页面, 并对官网进行维护
                </li>
              </ul>
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default Right
