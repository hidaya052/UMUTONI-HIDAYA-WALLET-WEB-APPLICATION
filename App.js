import React from 'react';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
    return (
        <div className="App">
            <h1>Wallet Tracker</h1>
            <AddTransaction />
            <TransactionList />
        </div>
    );
}

export default App;

