import React,{useContext} from 'react'
import { GlobalContexte } from '../Context/GlobalState'
import Transaction from './Transaction'
function TronsactionList() {

  const { transaction} = useContext(GlobalContexte)

  return (
    <>
        <h3 className='history'>Histoire</h3>
  
          <ul className='list'>
            { transaction.map( itme => (
              <Transaction key={itme.id} itme={itme} />
            ))}
          </ul>

    </>
  )
}

export default TronsactionList