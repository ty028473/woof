import React from 'react'
import '../../styles/carts.scss'
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap'

const CheckOutResult = ({ onHide, show }) => (
  <Modal
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    {...{ onHide, show }}
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">交易結果</Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">
      <Container>
        <Row>
          <Col>
            <Form.Text className="text-muted text-center">
              <h5>交易成功！！</h5>
            </Form.Text>
          </Col>
        </Row>
        <Row className="add-credit-card-mt">
          <Col xs={6}>
            <Button
              className="col btn btn-info btn-woof"
              onClick={() => console.log('回會員系統')}
            >
              回會員系統
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              className="col alert-linkbtn btn-primary btn-woof"
              onClick={() => console.log('繼續預約')}
            >
              繼續預約
            </Button>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer></Modal.Footer>
  </Modal>
)

export default CheckOutResult
