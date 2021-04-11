import Left from "./comonents/left"
import Right from "./comonents/right"
import { Row, Col, Divider } from "antd"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Row gutter={16}>
        <Col span={6}>
          <Left />
        </Col>
        <Col span={18}>
          <Right />
        </Col>
      </Row>
    </div>
  )
}

export default App
