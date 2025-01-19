const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: Number,
    type: String, // 'income' or 'expense'
    account: String,
    category: String,
    subcategory: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);