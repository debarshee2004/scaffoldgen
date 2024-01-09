import React, { createContext, useEffect, useState } from "react";

const CryptoContext = createContext();
export default CryptoContext;

const ContextProvider = ({children}) =>{

    const [currency, setCurrency] = useState('inr');
    const [symbol, setSymbol] = useState('₹');

    useEffect(()=>{
        if (currency === 'inr') {
            setSymbol('₹')
        }
        else if (currency === 'usd'){
            setSymbol('$')
        }
    },[currency])

    return(
        <CryptoContext.Provider value={{currency,setCurrency,symbol}}>
            {children}
        </CryptoContext.Provider>
    )
}

export {ContextProvider};