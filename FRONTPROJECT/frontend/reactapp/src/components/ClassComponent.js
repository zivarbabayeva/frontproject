import React from 'react'
import Spin from './Spin'

class ClassComponent extends React.Component {
  state = {
    value: "",
    limit: 3,
    isVisible: true
  }
  IncreaseHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  DecreaseHandler = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  ShowHandler = (e) => {
    this.setState({
      lang: e.target.innerHTML
    })
  }
  ChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
      limit: e.target.value.length > 60 && e.target.value.length < 120 ? 2 : e.target.value.length >= 120 && e.target.value.length < 180 ? 1 : "salam"
    })
    console.log(e.target.value.length);
  }
  NameHandler = (e) => {
    this.state({
      username: e.target.value
    })
  }
  PasswordHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  AddHandler = () => {
    this.setState({
      isVisible: false
    })
  }

  render() {
    const { value, limit, isVisible } = this.state;
    return (
      <div>
        <h6>SMS LIMIT:{limit}</h6>
        <input onChange={this.NameHandler} type={'text'} placeholder='Username...' />
        <input onChange={this.PasswordHandler} type={'password'} placeholder='Password...' />
        <button onClick={this.AddHandler}>Add User</button>
        {
          isVisible ? <Spin /> : alert(`${this.state.username} qeydiyyatdan kecdi`)
        }

      </div>
    )
  }
}
export default ClassComponent