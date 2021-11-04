import React from 'react'
import '../../styles/about.scss'
import { Form, Button } from 'react-bootstrap'

function AboutText(props) {
  return (
    <>
      <div className="container ">
        <div className="aboutbg">
          <div className="aboutleft"></div>
          <div className="aboutright">
            <div className="formsub">
              <h1 className="aboutmb24">成為保母</h1>
              <Form>
                <Form.Group
                  className=""
                  controlId="exampleForm.SelectCustomSizeSm"
                >
                  <Form.Control as="select" size="lg" custom>
                    <option>台北市信義區</option>
                    <option>台北市中山區</option>
                    <option>台北市中正區</option>
                    <option>台北市北投區</option>
                    <option>台北市文山區</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="地址" size="lg" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="身分證字號"
                    size="lg"
                  />
                </Form.Group>
                <div className=" mb-4 d-flex  align-items-center">
                  <Button
                    className="btn-lg-woof-secondary aboutbtnuodata   "
                    variant="primary"
                    type="submit"
                  >
                    身分證正面上傳
                  </Button>
                  <Form.Label className="fontsize">還沒上傳檔案</Form.Label>
                </div>

                <Form.Group
                  className="mt-3 mb-3   "
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    className="checkwh"
                    type="checkbox"
                    label="我遵守網站守則"
                  />
                </Form.Group>

                <div className=" mt-4 d-flex  align-items-center">
                  <Button className="aboutbtn" variant="primary" type="submit">
                    送出
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutText
