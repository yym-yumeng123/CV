import { Timeline } from "antd"
import React from "react"
import styles from "../Right/right.module.css"

export default function Project() {
  return (
    <div>
      <h4>工作及项目经历</h4>
      <div className='content'>
        <Timeline
          items={[
            {
              children: (
                <>
                  <h3>深圳观麦科技有限公司(2021-12 ~ 2022-12)</h3>
                  <p>
                    负责组件工具库的开发与维护; 参与PDA设备 react-native
                    技术的开发; 担任仓储项目组前端负责人
                  </p>

                  <p className={styles.project_title}>ERP央厨系统-仓储模块</p>
                  <ul className='list'>
                    <li>
                      1、在生鲜配送供应链中, 仓储模块是重要的环节,
                      通过把商品的入库、出库、盘点、上下架、配送等模块流程
                    </li>
                    <li>
                      2、使用
                      <strong>React Hooks + tailwindcss + TypeScript</strong>
                      技术栈来开发完成项目
                    </li>
                    <li>
                      3、项目难点没有文档, 业务难以理解, 全靠后端交流字段,
                      项目历史包袱重, 由于后端改为微服务, 前端代码变得耦合,
                      需要重构
                    </li>
                    <li>
                      4、项目重构与新需求冲突, 代码提交混乱, 增加测试难度,
                      通过一个模块一个模块的迁移, 代码储藏来完善重构,
                      并写文档来确保开发更加方便快捷
                    </li>
                  </ul>

                  <p className={styles.project_title}>
                    ERP央厨系统-PDA设备app开发
                  </p>
                  <ul className='list'>
                    <li>
                      1、把仓储模块的出入库模块做成app,
                      通过PDA扫描设备扫描商品库条形码来快速完成商品入库、出库操作, 增加便利性
                    </li>
                    <li>
                      2、使用
                      <strong>React Native</strong>
                      技术栈来开发完成项目, 100% 像素还原 UI 设计
                    </li>
                    <li>
                      3、项目难点是 React Native 版本一直在更新中, 第三方库支持比较少, 安装环境比较困难
                    </li>
                  </ul>
                </>
              ),
            },
            {
              children: (
                <>
                  <h3>平安智慧城(2019-08 ~ 2021-12)</h3>
                  <p>
                    任职前端开发工程师, 负责多个模块系统的研发, 完成前端页面
                    <strong> 100+ </strong>
                  </p>
                  <div>
                    <p className={styles.project_title}>
                      Askbob人工智能问答系统
                    </p>
                    <ul className='list'>
                      <li>
                        1、项目目的主要以通过算法训练机器人来完成用户的常规问题解答,
                        通过设置 对话模板、意图、词槽、词典等完善人工智能
                      </li>
                      <li>
                        2、我在这个项目负责了前期界面研究, 与产品商量原型设计,
                        给出技术预研, 配合后台开发人员设计界面与开发功能,
                        并负责框架选型, 封装公共组件,
                        以及根据需要引进第三方插件, 带领新人开发项目
                      </li>
                      <li>
                        3、这个项目遇到的最大困难是前端页面需求变化比较快,
                        需要和UI及时配合
                      </li>
                      <li>
                        4、该项目我采用了<strong>React</strong>
                        开发方案, 并搭配 <strong>umi 和 dva 来管理数据</strong>
                        在细节上配置请求, 路由, 以及和后端调试用户权限,
                        提取公用的业务组件, review 代码，封装 axios,
                        放在不同的文件下来管理项目
                      </li>
                      <li>
                        5、完善人工智能系统 ToC 模块， 搭建用户和系统的对话系统
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div>
                    <p className={styles.project_title}>
                      专项资金 用户可以审批客户提交的事项
                    </p>
                    <ul className='list'>
                      <li>
                        1、项目目的主要是客户通过申请端来办公,
                        需要工作人员审批的申请端以及审批端的模块开发
                      </li>
                      <li>
                        2、我在此项目负责审批端工作审批模块, 以及事项管理模块等,
                        配合后台人员开发功能,
                        并提取其他页面需要用到的公共业务组件开发
                      </li>
                      <li>
                        3、在项目中遇到的困难是客户对审批流程不清晰,
                        以及在需求的更改上比较频繁, 需要及时响应
                        审批管理系统模块，完善项目审批模块, 获取用户提交记录,
                        进行处理不同的流程节点,并对不同事项不同情形处理
                      </li>
                      <li>
                        4、该项目审批端使用
                        <strong>Vue + vue-router + + vuex + Axios</strong>
                        编写代码, 在申请端使用<strong>表单设计器</strong>
                        来统一对请求表单配置， 减少开发, 对后端返回数据进行封装,
                        转化为Form表单, 需要开发用户定制化需求,
                        采用组件化的方式开发, 减少代码之间的耦合度
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className={styles.project_title}>
                      联合奖惩/行为要素/视频审查等
                    </p>
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
                        3、使用 <strong>Echarts</strong>{" "}
                        在首页展现采集模块数据,使用 柱状图, 折线图,
                        饼状图多维度展示数据变化
                      </li>
                    </ul>
                  </div>
                </>
              ),
            },
            {
              children: (
                <>
                  <h3>移商智谷科技有限公司(2018-03 ~ 2019-07)</h3>
                  <p>一个前端独立开发电商管理后台系统, 以及官网开发</p>
                  <div>
                    <p className={styles.project_title}>电商管理后台</p>
                    <ul className='list'>
                      <li>
                        1、主要业务是电商做一个商家入驻平台,
                        抄袭模仿拼多多商家后台管理, 来完成商家的入驻, 商品上传,
                        库存管理等
                      </li>
                      <li>
                        2、从0开始搭建项目, 做项目选型, 使用
                        <strong>Vue</strong>技术栈, 配置路由和 封装Axios 使用
                        vuex 做状态管理， 实现多组件数据共享, 100% 还原设计
                      </li>
                      <li>
                        3、封装统一的 api 接口, 把常用功能封装为函数,
                        编写可复用的组件, 搞自己独立的开发组件库
                      </li>
                      <li>
                        4、工具类与业务类分开, 降低与具体业务的耦合,
                        回归工具本身
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
