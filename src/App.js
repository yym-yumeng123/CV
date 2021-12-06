import Left from "./Home/left"
import Right from "./Home/right"
import { Row, Col } from "antd"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Row gutter={16}>
        <Col span={7}>
          <Left />
        </Col>
        <Col span={17}>
          <Right />
        </Col>
      </Row>
    </div>
  )
}

export default App
