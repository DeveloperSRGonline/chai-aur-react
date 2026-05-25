// input box hai jo ki do input li raha hai label and className
// input field mein likhte hi call ho jaye isliye
function InputBox({
  label,
  amount,
  onAmountChange, // any amount change ke liye
  onCurrencyChange, // any currency change ke liye
  currencyOptions = [], // by default array taki app crash na ho safety check
  selectCurrency = "usd", // to select currency default is usd
  amountDisable = false, // production grade demands,
  currencyDisable = false,
  className = "",
}) {
  return (
    // ${className} is liye taki user kuchh apni style lagana chahta hai toh laga sakta hai
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">label</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={
            (e) => onCurrencyChange && onCurrencyChange(e.target.value) // number mein convert kyo nahi   kyoki inr ya use ya kuchh bhi ho hoga toh string mein hi
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            // remember the key in react it degrade the performance
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
