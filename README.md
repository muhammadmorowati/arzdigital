# 🚀 Crypto Price Tracker (Arzdigital Style)

A modern, real-time cryptocurrency price tracking website inspired by **Arzdigital** — built with **Next.js**, **React**, and a clean service-based architecture.  
This project displays live crypto market prices, detailed coin pages, search filters, charts, and automatic refreshing.

---

## ✨ Features

### ✅ Real-Time Crypto Prices
- Auto-refresh every 60 seconds.
- Optimized CSR-based data fetching.
- Uses `fetchCryptoData()` service for fast loading.

### ✅ Full Coin Detail Pages
Styled similar to Arzdigital, including:
- Coin logo + name + rank  
- Live price  
- Daily / weekly changes  
- Market cap, volume, circulating supply  
- Description & extra info (from CoinGecko)  
- Mini chart (Sparkline)  
- SEO-friendly dynamic routes (`/prices/[symbol]`)

### ✅ Search System
- Real-time search among cryptocurrencies  
- Supports name + symbol  
- Zero lag

### ✅ Clean UI Components
- `CryptoTable`  
- `CryptoSearch`  
- `CoinDetailPage`  
- Responsive & lightweight

### ✅ Modern Architecture
