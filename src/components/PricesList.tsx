import React from "react";
import type { Crypto } from "@/services/service";

interface PricesListProps {
  cryptoData: Crypto[];
}

const PricesList: React.FC<PricesListProps> = ({ cryptoData = [] }) => {
  return (
    <ul className="divide-y divide-zinc-100">
      {cryptoData.map((coin) => (
        <li
          key={coin.id}
          className="flex items-center justify-between py-2 text-sm md:text-base"
        >
          <div className="flex items-center gap-3 md:gap-5">
            <span className="w-6 text-xs text-zinc-500">{coin.rank}</span>
            <span className="font-medium md:basis-3/12 max-[850px]:basis-2/5">
              {coin.name}
            </span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-4 md:gap-8">
            <span className="font-semibold text-sky-700">
              ${Number(coin.price_usd).toLocaleString()}
            </span>

            <span
              className={
                Number(coin.percent_change_24h) >= 0
                  ? "text-emerald-600"
                  : "text-red-500"
              }
            >
              24h: {coin.percent_change_24h}%
            </span>

            <span
              className={
                Number(coin.percent_change_7d) >= 0
                  ? "text-emerald-600"
                  : "text-red-500"
              }
            >
              7d: {coin.percent_change_7d}%
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PricesList;
