"use client";

import { useEffect, useState } from "react";
import { fetchCryptoData, Crypto } from "@/services/service";
import CryptoTable from "@/components/CryptoTable";
import CryptoSearch from "@/components/CryptoSearch";

export default function PricesPage() {
  const [crypto, setCrypto] = useState<Crypto[]>([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  const load = async () => {
    const data = await fetchCryptoData();
    setCrypto(data);
  };

  // بارگذاری اولیه
  load();

  // رفرش هر ۱ دقیقه (۶۰٬۰۰۰ میلی‌ثانیه)
  const interval = setInterval(() => {
    load();
  }, 60000);

  // پاک کردن interval هنگام خروج از صفحه
  return () => clearInterval(interval);

}, []);

  const filtered = crypto.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">
        قیمت لحظه‌ای ارزهای دیجیتال
      </h2>

      <CryptoSearch value={search} onChange={setSearch} />

      <CryptoTable data={filtered} />
    </div>
  );
}
