import React,{useState, useContext} from 'react'
import { GlobalContexte } from '../Context/GlobalState'

function AddTransaction() {

  const [ text, setText] = useState("")
  const [ Amount, setAmount]= useState("")

  const {addTransaction} = useContext(GlobalContexte)
  
  const onSubmit= e =>{
    e.preventDefault()

    const newTransaction ={
      id: Math.floor(Math.random() *100),
      text,
      Amount: +Amount
    }
    addTransaction(newTransaction)
    
  }
  
  return (
    <>
    <h3 className='history'>Ajouter De Nouvelles Transactions</h3>
    <form onSubmit={onSubmit}>
       <div className='form-control'>
       <label>text</label>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='enter a text....'></input>
       </div>
       <div className='form-control'>
           <label className='Amount'>
               Montant<br />
                (Négatif - Dépense, Possitif - Revenu)
            </label>
            <input type='number' value={Amount} onChange={(e)=>setAmount(e.target.value)} placeholder='enter a number....'></input>
       </div>
       <button className='btn'>Ajouter Des Transactions</button>
    </form>
    </>

  )
}

export default AddTransaction