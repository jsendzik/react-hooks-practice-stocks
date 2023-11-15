import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, setMyStocks}) {

  function handleClick(stock) {
    const updatedMyStocks = myStocks.filter((myStock) => {
      return myStock.name !== stock.name
    })
    setMyStocks(updatedMyStocks)
  }


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks.map((stock) => {
          return (
          <Stock key={stock.id} onClick={()=> handleClick(stock)} name={stock.name} price={stock.price} ticker={stock.ticker}/>
        )})
      }
    </div>
  );
}

export default PortfolioContainer;
