# 📊 Finance Dashboard Pro

A comprehensive financial dashboard that provides real-time cryptocurrency tracking, stock market data, and financial news in a clean, responsive interface.

## 🚀 Features

### Cryptocurrency Tracking
- Real-time price updates for top cryptocurrencies
- 24h and 7d price change percentages
- Market cap and trading volume data
- Interactive price charts

### Stock Market Data
- Real-time stock prices
- Historical performance data
- Company information and news
- Watchlist functionality

### Currency Exchange
- Real-time exchange rates
- Currency conversion calculator
- Historical rate data
- Major currency pairs tracking

### User Experience
- Responsive design for all devices
- Dark/Light mode support
- Customizable dashboard
- Real-time notifications

## 🛠️ Prerequisites

- Node.js 16+ (LTS recommended)
- npm 8+ or yarn 1.22+
- Git
- API keys for:
  - CoinGecko (Free tier available)
  - Alpha Vantage (Free tier available)
  - ExchangeRate-API (Free tier available)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/finance-dashboard.git
cd finance-dashboard
```

### 2. Backend Setup
```bash
cd server
cp .env.example .env  # Update with your API keys
npm install
npm start
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm start
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Documentation: http://localhost:5000/api-docs

## 🔧 Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# API Keys
COIN_GECKO_API_KEY=your_coin_gecko_key
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_key
EXCHANGE_RATE_API_KEY=your_exchange_rate_key

# Rate Limiting (optional)
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
RATE_LIMIT_MAX=100           # 100 requests per window

# Cache Settings (optional)
CACHE_TTL=300000             # 5 minutes
```

## 📚 API Documentation

### Base URL
`https://your-api-url.com/api`

### Endpoints

#### 1. Cryptocurrency Data
- `GET /api/cryptocurrencies`
  - Fetches top 50 cryptocurrencies with market data
  - Query params: `vs_currency=usd`, `per_page=50`, `page=1`

#### 2. Stock Data
- `GET /api/stocks/:symbol`
  - Fetches stock data for the given symbol
  - Example: `/api/stocks/AAPL`

#### 3. Exchange Rates
- `GET /api/exchange-rates`
  - Fetches current exchange rates
  - Query params: `base=USD`, `symbols=EUR,GBP,JPY`

## 🚀 Deployment

### 1. Production Build
```bash
# Build the React app
cd client
npm run build

# Start production server (from server directory)
NODE_ENV=production node server.js
```

### 2. Using PM2 (Recommended for Production)
```bash
# Install PM2 globally
npm install -g pm2

# Start the server with PM2
pm2 start server.js --name "finance-dashboard"

# Save the PM2 process list
pm2 save

# Set up PM2 to start on system boot
pm2 startup
```

### 3. Environment Configuration
For production, make sure to set:
```env
NODE_ENV=production
CORS_ORIGIN=https://your-production-domain.com
```

## 🛡️ Security

- All API keys are stored in environment variables
- Rate limiting is enabled by default
- CORS is configured to only allow requests from trusted origins
- Input validation is implemented on all API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CoinGecko API](https://www.coingecko.com/en/api)
- [Alpha Vantage API](https://www.alphavantage.co/)
- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  Made with ❤️ by Your Name
</div>

### Deployment Steps
1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```

2. Copy build files to server's public directory

3. Configure environment variables on the production server

4. Start the production server:
   ```bash
   NODE_ENV=production node server.js
   ```

## API Documentation

### Endpoints
- `GET /api/cryptocurrencies` - Get top cryptocurrencies
- `GET /api/stocks/:symbol` - Get stock data
- `GET /api/exchange-rates` - Get exchange rates
- `GET /api/news` - Get financial news

## Links
Youtube:
Server: - liata.tech
        -www.liata.tech
        -lb-01.liata.tech
        -	web-01.liata.tech
        -	web-02.liata.tech

