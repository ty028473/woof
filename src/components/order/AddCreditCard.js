import React from 'react'
import '../../styles/carts.scss'
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap'

const AddCreditCard = ({ onHide, show }) => (
  <Modal
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    {...{ onHide, show }}
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">新增信用卡</Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">
      <Container>
        <Row >
          <Col >
            <Form.Control type="text" placeholder="持卡者姓名" />
            <Form.Text className="text-muted">錯誤訊息提示</Form.Text>
            <Form.Control className="add-credit-card-mt" type="text" placeholder="信用卡號碼" />
            <Form.Text className="text-muted">錯誤訊息提示</Form.Text>
          </Col>
        </Row>
        <Row className="add-credit-card-mt">
          <Col xs={6}>
            <Form.Label>到期日</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" />
          </Col>
          <Col xs={6}>
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" placeholder="000" />
          </Col>
        </Row>
        <Form.Text className="text-muted add-credit-card-mt">
          Woof 並不會留存您的信用卡完整資訊，Woof
          配合的合作服務商woofs股份有限公司符合 PCI-DSS
          國際安全認證，致力提供安全且便捷的交易環境。
        </Form.Text>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button className="col-3 btn btn-info btn-woof" onClick={onHide}>
        取消
      </Button>
      <Button
        className="col-3 ml-3 alert-linkbtn btn-primary btn-woof"
        onClick={() => console.log('送出新增卡囉')}
      >
        新增
      </Button>
    </Modal.Footer>
  </Modal>
)

export default AddCreditCard
