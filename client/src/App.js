import { useState, useEffect } from "react";
import TransactionModal from "./components/TransactionModal";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [showTransactions, setShowTransactions] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [transactionDate, setTransactionDate] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (showTransactions) {
      const fetchTransactions = async () => {
        try {
          const response = await fetch("http://localhost:3000/transactions");
          if (!response.ok) throw new Error("Failed to fetch transactions");
          const data = await response.json(); 

          setTransactions(data); 
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchTransactions();
    }
  }, [showTransactions]);

  const handleSubmitTransaction = async (e) => {
    e.preventDefault();

    const newTransaction = {
      "Transaction Date": transactionDate,
      "Account Number": accountNumber,
      "Account Holder Name": name,
      Amount: amount,
      Status: "Pending",
    };

    try {
      const response = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) throw new Error("Failed to save transaction");

      const savedTransaction = await response.json();
      setTransactions([...transactions, savedTransaction]);
      resetModal();
    } catch (err) {
      alert("Error saving transaction: " + err.message);
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setTransactionDate("");
    setAccountNumber("");
    setName("");
    setAmount("");
  };

  if (!showTransactions) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-cream-500">
        <h1 className="text-3xl font-bold text-darkgreen-500 mb-6">
          Transaction Management System
        </h1>
        <button
          onClick={() => setShowTransactions(true)}
          className="bg-vividcyan-500 hover:bg-vividcyan-300 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          View All Transactions
        </button>
      </div>
    );
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-vividcyan-500"></div>
          <p className="mt-4 text-vividcyan-600 font-medium">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="bg-red-100 text-red-700 px-6 py-4 rounded-lg shadow-md border border-red-300">
          <p className="font-semibold">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="App p-8 max-w-6xl mx-auto ">
      <div className="flex justify-start items-center gap-4 p-4">
        <h1 className="text-3xl font-bold text-darkgreen-500 ">Transactions</h1>
        <button
          className="bg-vividcyan-500 hover:bg-vividcyan-300 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add transaction
        </button>
      </div>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-vividorange-500 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-2 text-center">Transaction Date</th>
              <th className="py-3 px-2 text-center">Account Number</th>
              <th className="py-3 px-2 text-center">Account Holder Name</th>
              <th className="py-3 px-2 text-center">Amount</th>
              <th className="py-3 px-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="bg-cream-500">
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">
                  {transaction["Transaction Date"]}
                </td>
                <td className="py-2 px-4 border">
                  {transaction["Account Number"]}
                </td>
                <td className="py-2 px-4 border">
                  {transaction["Account Holder Name"]}
                </td>
                <td className="py-2 px-4 border text-right">
                  ${parseFloat(transaction.Amount).toFixed(2)}
                </td>
                <td className="py-2 px-4 border text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      transaction.Status === "Settled"
                        ? "bg-green-100 text-green-800"
                        : transaction.Status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.Status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TransactionModal
        isOpen={isModalOpen}
        onClose={resetModal}
        onSubmit={handleSubmitTransaction}
        transactionDate={transactionDate}
        setTransactionDate={setTransactionDate}
        accountNumber={accountNumber}
        setAccountNumber={setAccountNumber}
        name={name}
        setName={setName}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
}

export default App;
