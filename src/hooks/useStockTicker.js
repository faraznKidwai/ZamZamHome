import { useState, useEffect } from "react";
// Direct internal file imports are managed in memory instantly for $0 cost
import tickerDataSnapshot from "../data/TickerData.json";

export default function useStockTicker() {
  const [stocks, setStocks] = useState([]);
  const [source, setSource] = useState("local-snapshot");

  useEffect(() => {
    if (tickerDataSnapshot && Array.isArray(tickerDataSnapshot)) {
      setStocks(tickerDataSnapshot);
      setSource("local-snapshot");
    }
  }, []);

  // Expose an identical API footprint to protect TickerBar components from breaking
  return { stocks, source };
}
