## README

# Coinography

[Live Demo](https://coinography.herokuapp.com/#/)

Coinography is a cryptocurrency trading platform inspired by Coinbase. This website was implemented utilizing Rails/PostgreSQL for the backend and React/Redux on the frontend. 

![](/app/assets/images/splash.png)

### Technologies
+ Ruby on Rails backend with PostgreSQL database
+ React/Redux front-end
+ Coinbase Pro REST API 
+ React's Recharts library

### Features
+ Coinography utilizes modular React components to display an interactive UI 
+ Portfolio history stored for every user, which is fetched and dynamically displayed upon login
+ Cryptocurrency historical data chart is displayed by fetching real-time price data from Coinbase Pro API
+ Price charts are dynamically time-framed using Recharts library
+ Users can create transactions instantly with real-time crypto prices 


### Implementation
**User Portfolio**

![Portfolio Chart](/app/assets/images/dashboard.png)

User's portfolio is created by maintaining a transactions table in the database. Every time a transaction takes place, the portfolio is updated and rendered on the user dashboard.

**Cryptocurrency historical data chart**

![Asset](/app/assets/images/asset.png)

Multiple AJAX requests are chained to Coinbase Pro API to fetch historical price data in real-time, and Recharts is used to display the data in a visually appealing chart. Timescales can be toggled for the data set.
```Javascript
export const fetchPriceData = (symbol, granularity) => (
  $.ajax({
    method: 'GET',
    url: `https://api.pro.coinbase.com/products/${symbol}-USD/candles?granularity=${granularity}`
  })
)
```

**Buy/Sell Cryptocurrency**

Users can post transactions, which are saved in the database. Cryptocurrencies can be bought or sold at real-time prices instantly, and the user portfolio gets updated accordingly.
```Javascript
const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

const createTransaction = transaction => ({
  type: CREATE_TRANSACTION,
  transaction
})
```
