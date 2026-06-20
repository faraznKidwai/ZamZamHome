import { useState, useEffect } from "react";
import fallbackData from "../data/TickerData.json";

const NSE_SYMBOLS = [
  "RELIANCE.NS",
  "TCS.NS",
  "INFY.NS",
  "HDFCBANK.NS",
  "SBIN.NS",
  "ITC.NS",
  "BHARTIARTL.NS",
  "LT.NS",
  "AXISBANK.NS",
  "WIPRO.NS",
];

async function fetchYahooQuote(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("fetch failed");
  const json = await res.json();
  const meta = json?.chart?.result?.[0]?.meta;
  if (!meta) throw new Error("no data");
  const changePercent =
    meta.regularMarketChangePercent ??
    ((meta.regularMarketPrice - meta.chartPreviousClose) /
      meta.chartPreviousClose) *
      100;
  return {
    id: symbol,
    symbol: symbol.replace(".NS", ""),
    name: meta.shortName || symbol.replace(".NS", ""),
    changePercent: Number(changePercent.toFixed(2)),
  };
}

export default function useStockTicker(refreshMs = 120000) {
  const [stocks, setStocks] = useState(fallbackData);
  const [source, setSource] = useState("mock");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const results = await Promise.allSettled(
          NSE_SYMBOLS.map((s) => fetchYahooQuote(s))
        );
        const live = results
          .filter((r) => r.status === "fulfilled")
          .map((r) => r.value);
        if (!cancelled && live.length >= 5) {
          setStocks(live);
          setSource("live");
        }
      } catch {
        if (!cancelled) {
          setStocks(fallbackData);
          setSource("mock");
        }
      }
    };

    load();
    const timer = setInterval(load, refreshMs);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [refreshMs]);

  return { stocks, source };
}
