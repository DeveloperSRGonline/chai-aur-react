import { useEffect, useState } from "react";

// custom hooks kuchh nahi bas ek function hi hai jyada load mat lana
function useCurrencyInfo(currency) {
    const [data,setData] = useState({});// {} -> taki kuchh nahi toh object hi sahi

  // useEffect(()=>{},[]) syntax
  useEffect(() => {
    // kar kya raha hai bas ek fetch hi toh karna hai
    // mostly api ka jo data hota hai vo string mein hi hota hai
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)// data ke liye api
    .then((res)=>res.json())// data ko string se json mein convert karne ke liye
    .then((res)=>setData(res[currency]))// json data mein se jo currency hai let say inr toh ins ke data ko setData ki madat se data mein set karne ke liye

    console.log(data)// jo bhi data aaya usko check kar leta hai

  }, [currency]);// jab jab currency ke andar change ho tab tab fetch call ho


  console.log(data)
  // ab custom hook hai return toh karna padega ab kya return karna hai
  return data
}

// default export is liye kyo ki ek hi export kar rahe kisi bhi naam se import kar sakte hai
export default useCurrencyInfo;