import './App.css';

import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpence from './components/IncomeExpence';
import TronsactionList from './components/TronsactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <div className="App">
    <GlobalProvider>
      <Header />
      <div className="">
        <Balance />
        <IncomeExpence />
        <TronsactionList/>
        <AddTransaction />
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
