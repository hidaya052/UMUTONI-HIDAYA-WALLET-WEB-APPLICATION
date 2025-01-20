import React, { useEffect, useState } from 'react';

function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await fetch('/api/transactions');
            const data = await response.json();
            setTransactions(data);
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction._id}>
                        {transaction.amount} - {transaction.type} - {transaction.account} - {transaction.category}/{transaction.subcategory}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;

