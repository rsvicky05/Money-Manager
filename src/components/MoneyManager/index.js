import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amt: '',
    type: 'INCOME',
    income: 0,
    expense: 0,
    history: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amt: event.target.value})
  }

  onChangeType = event => {
    console.log(event.target.value)
    this.setState({type: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, amt, type} = this.state
    const amount = parseInt(amt)
    console.log(amount)
    const newHis = {id: v4(), title, amt, type}
    if (type === 'INCOME') {
      this.setState(prev => ({
        title: '',
        amt: '',
        income: prev.income + amount,
        history: [...prev.history, newHis],
      }))
    } else if (type === 'EXPENSES') {
      this.setState(prev => ({
        title: '',
        amt: '',
        expense: prev.expense + amount,
        history: [...prev.history, newHis],
      }))
    }
  }

  deleteTransaction = id => {
    const {history} = this.state
    const newHistroy = history.filter(each => each.id !== id)
    const transaction = history.filter(each => each.id === id)[0]
    const {amt, type} = transaction
    const amount = parseInt(amt)
    console.log(transaction)
    if (type === 'INCOME') {
      this.setState(prev => ({
        income: prev.income - amount,
        history: newHistroy,
      }))
    } else if (type === 'EXPENSES') {
      this.setState(prev => ({
        expense: prev.expense - amount,
        history: newHistroy,
      }))
    }
  }

  render() {
    const {title, amt, history, type, income, expense} = this.state
    return (
      <div className="container">
        <div className="name-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="description">
            Welcome back to your{' '}
            <span className="sub-description">Money Manager</span>
          </p>
        </div>
        <div className="money-details">
          <MoneyDetails key="money-02" Income={income} Expense={expense} />
        </div>
        <div className="transaction-con">
          <div className="card-container">
            <h1 className="card-head">Add Transaction</h1>
            <form className="form-con" onSubmit={this.onSubmitForm}>
              <label className="label-name" htmlFor="title">
                TITLE
              </label>
              <input
                className="input"
                id="title"
                type="text"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label className="label-name" htmlFor="amt">
                AMOUNT
              </label>
              <input
                className="input"
                id="amt"
                type="text"
                placeholder="AMOUNT"
                value={amt}
                onChange={this.onChangeAmount}
              />
              <label className="label-name" htmlFor="type">
                TYPE
              </label>
              <select
                className="input"
                onChange={this.onChangeType}
                value={type}
              >
                {transactionTypeOptions.map(each => (
                  <option
                    key={each.optionId}
                    id={each.optionId}
                    value={each.optionId}
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="card-container">
            <h1 className="card-head">History</h1>
            <div className="histroy-header">
              <p className="histroy-head">Title</p>
              <p className="histroy-head">Amount</p>
              <p className="histroy-head type">Type</p>
            </div>
            <div>
              {history.map(each => {
                const typeObj = transactionTypeOptions.find(
                  opt => opt.optionId === each.type,
                )
                return (
                  <TransactionItem
                    eachTransaction={{...each, type: typeObj.displayText}}
                    key={each.id}
                    onDelete={this.deleteTransaction}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
