import React from "react";
import numeral from "numeral";


const CurrencyFormat= ({amount})=>{
    const fromattedAmount = numeral(amount).format("$0,0.00")
    return <div>{fromattedAmount}</div>;

}

export default CurrencyFormat;