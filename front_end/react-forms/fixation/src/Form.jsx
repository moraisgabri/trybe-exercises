import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.eventHandler = this.eventHandler.bind(this)

    this.state = {
      ehotestas: '',
    }


  }

  eventHandler(event) {
    this.setState({ ehotestas: event.target.value })
  }


  
  render() {
    return(
      <div className="form-container">
        <h1>Form genérico</h1>
        <form className="form">
          <fieldset>
              
              <label>
                Nome
                <textarea
                name=""
                maxlength="40"
                />
              </label>

              <label>
                Email
                <textarea
                name=""
                maxlength="50"
              />
              </label>

              <label>
                CPF
                <textarea />
              </label>

              <label>
                Endereço
                <textarea
                name=""
                maxlength="200"
                />
              </label>

          </fieldset>

          <select>
          </select>
        </form>
      </div>
    )
  }
}

export default Form;
