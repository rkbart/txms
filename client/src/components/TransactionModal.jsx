
function TarnsactionModal({ 
  isOpen,
  onClose,
  onSubmit,
  transactionDate,
  setTransactionDate,
  accountNumber,
  setAccountNumber,
  name,
  setName,
  amount,
  setAmount
}) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-cream-500 rounded-lg w-full max-w-md p-6 shadow-lg relative">
        <h3 className="text-lg font-semibold mb-4 text-darkgreen">
          Add New Transaction
        </h3>
        <form
          id="transaction-form"
          className="space-y-4 bg-cream-500"
          onSubmit={onSubmit}
        >
          <input
            type="date"
            placeholder="Transaction Date"
            max={new Date().toLocaleDateString("en-CA")}
            value={transactionDate}
            onChange={(e) => setTransactionDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            required
          />
          <input
            type="text"
            placeholder="16 Digit Account Number"
            maxLength="14"
            value={accountNumber}
            onChange={(e) => {
              let input = e.target.value.replace(/\D/g, "");

              if (input.length > 4 && input.length <= 8) {
                input = `${input.slice(0, 4)}-${input.slice(4)}`;
              } else if (input.length > 8) {
                input = `${input.slice(0, 4)}-${input.slice(
                  4,
                  8
                )}-${input.slice(8, 12)}`;
              }
              setAccountNumber(input);
            }}
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            required
          />
          <input
            type="text"
            placeholder="Account Holder Name"
            value={name}
            onChange={(e) => {
              let value = e.target.value
                .replace(/[^A-Za-z\s]/g, "") // remove non-letters & non-spaces
                .replace(/\s{2,}/g, " "); // replace 2+ spaces with a single space
              setName(value);
            }}
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            min="1"
            max="99999"
            value={amount}
            onChange={(e) => {
              const amountValue = e.target.value.replace(/\D/g, "");
              if (amountValue.length <= 5) setAmount(amountValue);
            }}
            required
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-md bg-vividcyan-500 text-white hover:bg-vividcyan-300"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TarnsactionModal;