"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Asset {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const initialAssets: Asset[] = [
  { symbol: "BTC", name: "Bitcoin", price: 68542.30, change: 1245.80, changePercent: 1.85 },
  { symbol: "ETH", name: "Ethereum", price: 3847.65, change: -42.30, changePercent: -1.09 },
  { symbol: "AAPL", name: "Apple Inc.", price: 189.84, change: 2.35, changePercent: 1.25 },
  { symbol: "GOLD", name: "Gold", price: 2345.20, change: 15.40, changePercent: 0.66 },
  { symbol: "SPY", name: "S&P 500", price: 5234.18, change: 28.45, changePercent: 0.55 },
  { symbol: "TSLA", name: "Tesla", price: 248.50, change: -5.20, changePercent: -2.05 },
];

export function AssetTicker() {
  const [assets, setAssets] = useState(initialAssets);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prev) =>
        prev.map((asset) => {
          const changeAmount = (Math.random() - 0.5) * asset.price * 0.002;
          const newPrice = asset.price + changeAmount;
          const newChange = asset.change + changeAmount;
          const newChangePercent = (newChange / (newPrice - newChange)) * 100;
          return {
            ...asset,
            price: newPrice,
            change: newChange,
            changePercent: newChangePercent,
          };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden bg-secondary/50 py-3 border-y border-border">
      <div className="flex animate-scroll gap-8 whitespace-nowrap">
        {[...assets, ...assets].map((asset, index) => (
          <div
            key={`${asset.symbol}-${index}`}
            className="flex items-center gap-3 px-4"
          >
            <span className="font-semibold text-foreground">{asset.symbol}</span>
            <span className="text-foreground">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span
              className={`flex items-center gap-1 text-sm ${
                asset.change >= 0 ? "text-primary" : "text-red-500"
              }`}
            >
              {asset.change >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {asset.changePercent >= 0 ? "+" : ""}
              {asset.changePercent.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
