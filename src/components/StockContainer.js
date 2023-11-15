import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, setMyStocks, myStocks}) {

  function handleClick(stock) {
    const updatedMyStocks = [...myStocks, stock]
    setMyStocks(updatedMyStocks)
  }


  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return (
          <Stock key={stock.id} onClick={() => handleClick(stock)} name={stock.name} price={stock.price} ticker={stock.ticker}/>
        )
      })}
    </div>
  );
}

export default StockContainer;
