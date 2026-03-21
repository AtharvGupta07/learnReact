import { useId, useState } from "react";


function InputBox({
    label,  //from
    amount, //amount->usestate
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], //options->object.keys()
    selectCurrrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            {/* Input where amount goes */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label} 
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) =>{
                        onAmountChange && onAmountChange(Number(e.target.value))
                        // okay so this just connects my input i.e., what im typing  and connects this to amoount which s used further for calculation 
                    }}
                    
                />
            </div>

            {/* Drop down to show options */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                
                        {currencyOptions.map((currency)=>(
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