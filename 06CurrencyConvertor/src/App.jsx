import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  // amount ke liye amount state
  const [amount, setAmount] = useState(0);

  // from and to ke liye
  // Debug : spelling mistake setform instead of setfrom
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // converted amount ke liye
  const [convertedAmount, setConvertedmAmount] = useState(0);

  // using our custom hook
  const currencyInfo = useCurrencyInfo(from);

  // keys likanle ke liye currencyInfo jo data ka object aayega vaha se
  const options = Object.keys(currencyInfo);

  // swap button par click karne par ye chalega
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedmAmount(amount); // converted ab input ban jayega
    setAmount(convertedAmount);
  };

  // jo final result display karegi vo state
  const convert = () => {
    setConvertedmAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmdzfGVufDB8fDB8fHww')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // form jab bhi submit hota hai vo kisi url me jata hai main nahi chahta ye ho
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label="From"
              amount={amount}
              // on amount change nahi pass kiye is liye hum amount change nahi kar pa rahe
              onAmountChange={(amount)=>setAmount(amount)}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                // button chalane ke liye 
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={to}
              amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
