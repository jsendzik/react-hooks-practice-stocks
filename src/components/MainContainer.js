import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [originalStocks, setOriginalStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((stocks) => {
      setStocks(stocks)
      setOriginalStocks(stocks)
    })
  }, [])


  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks} originalStocks={originalStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={setStocks} myStocks={myStocks} setMyStocks={setMyStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} setMyStocks={setMyStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
