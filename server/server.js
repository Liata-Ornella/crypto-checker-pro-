require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000, 
  max: process.env.RATE_LIMIT_MAX || 100 
});
app.use(limiter);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/cryptocurrencies', async (req, res) => {
  try {
    const symbols = ['BTC', 'ETH', 'BNB', 'ADA', 'SOL', 'XRP', 'DOT', 'DOGE', 'AVAX', 'MATIC'];
    const pricePromises = symbols.map(symbol => 
      axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`)
    );
    
    const responses = await Promise.all(pricePromises);
    
    const formattedData = responses.map((response, index) => {
      const data = response.data;
      const priceChangePercent = parseFloat(data.priceChangePercent);
      
      return {
        id: symbols[index].toLowerCase(),
        symbol: symbols[index],
        name: symbols[index], 
        current_price: parseFloat(data.lastPrice),
        price_change_percentage_24h: priceChangePercent,
        price_change_percentage_7d: 0, 
        market_cap: 0, 
        total_volume: parseFloat(data.volume),
        last_updated: new Date().toISOString()
      };
    });
    
    res.json(formattedData);
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    res.status(500).json({ error: 'Failed to fetch cryptocurrency data' });
  }
});

app.get('/api/stocks/:symbol', async (req, res) => {
  const { symbol } = req.params;
  try {
    const response = await axios.get(
      'https://www.alphavantage.co/query',
      {
        params: {
          function: 'GLOBAL_QUOTE',
          symbol: symbol,
          apikey: process.env.ALPHA_VANTAGE_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.get('/api/exchange-rates', async (req, res) => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/USD`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    res.status(500).json({ error: 'Failed to fetch exchange rates' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
