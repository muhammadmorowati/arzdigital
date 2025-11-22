"use client";

import { Crypto } from "@/services/service";

interface Props {
  data: Crypto[];
}

const CryptoTable = ({ data }: Props) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
      <table className="w-full min-w-[900px] text-sm">
        <thead className="bg-zinc-50 text-zinc-600 text-xs">
          <tr>
            <th className="p-3 text-center">#</th>
            <th className="p-3 text-right">ارز دیجیتال</th>
            <th className="p-3 text-right">قیمت</th>
            <th className="p-3 text-right">حجم بازار</th>
            <th className="p-3 text-right">معاملات روزانه</th>
            <th className="p-3 text-center">روزانه</th>
            <th className="p-3 text-center">هفتگی</th>
          </tr>
        </thead>

        <tbody>
          {data.map((coin) => {
            const daily = Number(coin.percent_change_24h);
            const weekly = Number(coin.percent_change_7d);

            return (
              <tr key={coin.id} className="border-b hover:bg-zinc-50">
                <td className="p-3 text-center">{coin.rank}</td>

                {/* Name + Icon */}
                <td className="p-3 flex items-center gap-3 justify-start">
               
                  <div className="flex flex-col">
                    <span className="font-medium">{coin.name}</span>
                    <span className="text-xs text-zinc-500">{coin.symbol}</span>
                  </div>
                </td>

                {/* Price */}
                <td className="p-3 text-right font-semibold text-sky-700">
                  ${Number(coin.price_usd).toLocaleString()}
                </td>

                {/* Market Cap */}
                <td className="p-3 text-right text-zinc-600">
                  {Number(coin.market_cap_usd).toLocaleString()}$
                </td>

                {/* Volume */}
                <td className="p-3 text-right text-zinc-600">
                  {Number(coin.volume24).toLocaleString()}$
                </td>

                {/* Daily Change */}
                <td
                  className={`p-3 text-center font-medium ${
                    daily >= 0 ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {daily}%
                </td>

                {/* Weekly Change */}
                <td
                  className={`p-3 text-center font-medium ${
                    weekly >= 0 ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {weekly}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
