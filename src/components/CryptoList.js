import React from "react";

const CryptoList = (props) => {
  const options = Object.keys(props.currencies).map((currency, index) => {
    return <option value={currency} key={index}>{currency}</option>
  });

  const handleChange = (event) => {
    let currency = event.target.value;
    console.log(currency);
    props.onCurrencySelected(currency);
  }

  return(
    <select
      id="currencyList"
      defaultValue="default"
      onChange={handleChange}>
      <option disabled value="default">Choose a currency</option>
      {options}
    </select>
  )

}

export default CryptoList;
