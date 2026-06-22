import { useState, useEffect } from "react";
import fallbackData from "../data/TickerData.json";

const NSE_SYMBOLS = [
  "ADANIENT.NS",
  "ADANIPORTS.NS",
  "APOLLOHOSP.NS",
  "ASIANPAINT.NS",
  "AXISBANK.NS",
  "BAJAJ-AUTO.NS",
  "BAJFINANCE.NS",
  "BAJAJFINSV.NS",
  "BEL.NS",
  "BHARTIARTL.NS",
  "CIPLA.NS",
  "COALINDIA.NS",
  "DRREDDY.NS",
  "EICHERMOT.NS",
  "GRASIM.NS",
  "HCLTECH.NS",
  "HDFCBANK.NS",
  "HDFCLIFE.NS",
  "HINDALCO.NS",
  "HINDUNILVR.NS",
  "ICICIBANK.NS",
  "INDUSINDBK.NS",
  "INFY.NS",
  "INDIGO.NS",
  "ITC.NS",
  "JSWSTEEL.NS",
  "JIOFIN.NS",
  "KOTAKBANK.NS",
  "LT.NS",
  "M&M.NS",
  "MARUTI.NS",
  "MAXHEALTH.NS",
  "NESTLEIND.NS",
  "NTPC.NS",
  "ONGC.NS",
  "POWERGRID.NS",
  "RELIANCE.NS",
  "SBILIFE.NS",
  "SHRIRAMFIN.NS",
  "SBIN.NS",
  "SUNPHARMA.NS",
  "TCS.NS",
  "TATACONSUM.NS",
  "TATASTEEL.NS",
  "TECHM.NS",
  "TITAN.NS",
  "TRENT.NS",
  "ULTRACEMCO.NS",
  "WIPRO.NS",
]; // Trimmed exact non-Nifty placeholders to keep it tight & responsive

const FINNHUB_API_KEY = "APIKEY";

// Helper utility to create a micro-delay between API hits
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchFinnhubQuote(symbol) {
  // CRITICAL: encodeURIComponent handles tickers like M&M so the '&' doesn't break the URL string
  const encodedSymbol = encodeURIComponent(symbol);
  const url = `https://finnhub.io/api/v1/quote?symbol=${encodedSymbol}&token=${FINNHUB_API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Finnhub fetch failed for ${symbol}`);

  const json = await res.json();
  const currentPrice = json.c;
  const previousClose = json.pc;

  // Finnhub returns 0s for symbols it doesn't recognize or can't access on free tiers
  if (!currentPrice || !previousClose) {
    throw new Error(`Incomplete or unsupported data for ${symbol}`);
  }

  const changePercent =
    json.dp ?? ((currentPrice - previousClose) / previousClose) * 100;

  return {
    id: symbol,
    symbol: symbol.replace(".NS", ""),
    name: symbol.replace(".NS", ""),
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
        const live = [];

        // Loop sequentially with a tiny 40ms stagger.
        // 50 stocks * 40ms = ~2 seconds total execution. Completely unnoticeable to users,
        // but completely protects you from hitting rate-limiting burst walls.
        for (const symbol of NSE_SYMBOLS) {
          if (cancelled) return;
          try {
            const data = await fetchFinnhubQuote(symbol);
            live.push(data);
          } catch (e) {
            console.warn(e.message);
          }
          await delay(40);
        }

        if (!cancelled && live.length >= 5) {
          setStocks(live);
          setSource("live");
        }
      } catch (err) {
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
