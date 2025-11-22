import axios from "axios";

export const fetchCoinDetail = async (id: string) => {
  try {
    const info = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
    return info.data[0];
  } catch (err) {
    console.error("Coin detail error:", err);
    return null;
  }
};

export const fetchCoinDescription = async (symbol: string) => {
  try {
    const desc = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${symbol.toLowerCase()}`
    );
    return desc.data;
  } catch (err) {
    return null;
  }
};

export const fetchCoinChart = async () => {
  return `https://quickchart.io/chart?c={
    type:'line',
    data:{labels:['1','2','3','4','5','6','7'],datasets:[{data:[8,9,7,10,6,12,9]}]},
    options:{legend:{display:false},scales:{x:{display:false},y:{display:false}}}
  }`;
};
