import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] =useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency])

    return data;
}

export default useCurrencyInfo;


// okay so basically it does is, it get the entire conversion of all the resultant array of object, i.e., if the currrecncy equal -> usd it will give conversion of usd in each currency and then it will return it 