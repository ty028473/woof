import React from 'react'
import Card from 'react-credit-cards'

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './utils'

import 'react-credit-cards/es/styles-compiled.css'

export default class App extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { issuer } = this.state
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value
        return acc
      }, {})

    this.setState({ formData })
    this.form.reset()
  }

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state

    return (
      <div className="container">
        <div key="Payment">
          <div className="row App-payment my-4">
            <div className="col-6">
              <Card
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                callback={this.handleCallback}
              />
            </div>
            <div className="col-4 mt-3">
              <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="請輸入卡號"
                    pattern="[\d| ]{16,22}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="請輸入姓名"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <input
                      type="tel"
                      name="expiry"
                      className="form-control"
                      placeholder="MM/YY"
                      pattern="\d\d/\d\d"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="tel"
                      name="cvc"
                      className="form-control"
                      placeholder="CVC"
                      pattern="\d{3,4}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                </div>
                <input type="hidden" name="issuer" value={issuer} />
                {/* <div className="form-actions">
                  <button className="col btn btn-primary btn-woof">付款</button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
