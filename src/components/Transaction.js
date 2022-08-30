import React,{useContext} from 'react'
import { GlobalContexte } from '../Context/GlobalState'

function Transaction({ itme}) {
    const sign = itme.Amount < 0 ?"-" : "+";
    const {deleteTransaction} = useContext(GlobalContexte)
  return (
    <li className={itme.Amount < 0?'minus':'plus'}>{itme.text}<span>{sign}${Math.abs(itme.Amount)}
    </span><button className='delete-button' onClick={()=>deleteTransaction(itme.id)}>x</button></li>
  )
}

export default Transaction