import React,{ useContext}from 'react'
import { GlobalContexte } from '../Context/GlobalState'


function IncomeExpence() {
  const { transaction} = useContext(GlobalContexte);
  const Amount = transaction.map( itme => itme.Amount)
  const income = Amount.filter( itm => itm > 0).reduce( (acc,itm)=>(acc+=itm),0)
  const expend = (Amount.filter( itm => itm < 0).reduce(( acc,itm)=>( acc+=itm),0) *-1)
  return (
    <div className='inc-expenses'>
        <div>
        <h4>REVENU</h4>
        <p className='money-plus'>{income}</p>
        </div>
        <div>
        <h4>EXPENCE</h4>
        <p className='money-minus'>{expend}</p>
        </div>
    </div>
  )
}

export default IncomeExpence