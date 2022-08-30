import React,{useContext} from 'react'
import { GlobalContexte } from '../Context/GlobalState'

function Balance() {
  const { transaction} = useContext(GlobalContexte);
  const Amount = transaction.map( itme => itme.Amount)
  const Total = Amount.reduce( (acc, itm)=> (acc+=itm),0)
  return (
    <>
    <h3>Votre Solde</h3>
    <h1>${Total}</h1>
    
    </>
  )
}

export default Balance