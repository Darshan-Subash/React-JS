import { useState,useEffect } from "react";

function useCurrencyInfo(Currency){
 const [Data,setData] = useState({});
 useEffect(() => {
  fetch(`https://latest.currency-api.pages.dev/v1/currencies/${Currency}.json`)
  .then((res) => res.json())
  .then((res) => setData(res[Currency]))
  console.log(Data)
 },[Currency])
 return Data;
}

export default useCurrencyInfo;