import { useState } from 'react'
import Header from './compoennts/Header/Header'
import Balance from './compoennts/Balance/Balance'
import IncomeExpenses from './compoennts/IncomeExpenses/IncomeExpenses'
import TransactionList from './compoennts/TransactionList/TranscationList'
import AddTransaction from './compoennts/AddTransaction/AddTranscation'
import { GlobalProvider } from './context/GlobalState'
import "./App.css"

function App() {
  return (
    <>
      <div className="container">
        <div className="app__wrapper">
          <div className="app__container">
            <GlobalProvider>
              <Header></Header>
              <Balance></Balance>
              <IncomeExpenses></IncomeExpenses>
              <TransactionList></TransactionList>
              <AddTransaction></AddTransaction>
            </GlobalProvider>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
