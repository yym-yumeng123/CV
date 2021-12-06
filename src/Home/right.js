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

      <div className='project bottom'>
        <h4>项目经历</h4>
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
  )
}

export default Right
