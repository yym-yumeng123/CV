import { Col, Row } from "antd"
import styles from "./page.module.css"
import Left from "./components/Left/left"
import Right from "./components/Right/right"

export default function Home() {
  return (
    <main className={styles.app}>
      <Row gutter={16}>
        <Col span={7}>
          <Left />
        </Col>
        <Col span={17}>
          <Right />
        </Col>
      </Row>
    </main>
  )
}
