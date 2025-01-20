import React, { useState } from 'react';

function AddTransaction() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');
    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = { amount, type, account, category, subcategory };
        await fetch('/api/transactions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(transaction)
        });
        // Reset form
        setAmount('');
        setAccount('');
        setCategory('');
        setSubcategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} placeholder="Account" required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
            <input type="text" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} placeholder="Subcategory" />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default AddTransaction;

