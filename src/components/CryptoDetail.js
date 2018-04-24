import React from "react";

const CryptoDetail = (props) => {
  if(!props.currency) return null;
  return (
    <article>
      <h3>{props.currency.name}</h3>
    </article>
  )
}

export default CryptoDetail;
