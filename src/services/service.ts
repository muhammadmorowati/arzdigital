// services/cryptoService.ts
import axios from "axios";

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  price_usd: string;
  rank: string;
  percent_change_24h: string;
  percent_change_7d: string;
  market_cap_usd: string;
  volume24: string;
}

interface ApiResponse {
  data: Crypto[];
}

export const fetchCryptoData = async (): Promise<Crypto[]> => {
  const url = "https://api.coinlore.net/api/tickers/";

  try {
    const res = await axios.get<ApiResponse>(url);
    return res.data.data;
  } catch (err) {
    console.error("Error fetching crypto data", err);
    return [];
  }
};
