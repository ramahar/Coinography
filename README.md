## README

# Coinography

[Live Demo](https://coinography.herokuapp.com/#/)

Coinography is a cryptocurrency trading platform inspired by Coinbase. This website was implemented utilizing Rails/PostgreSQL for the backend and React/Redux on the frontend. 

Coinbase Pro REST API was used to fetch price data in real-time. React's Recharts library was used for rendering price charts and user portfolios.

![](/app/assets/images/splash.png)

### Features
+ Coinography utilizes custom frontend to backend user authentication using BCrypt
+ Demo login with seeded transaction history for any users who want to view only as a guest
+ Upon login, a user sees a prominently featured chart of their portfolio value over time
+ Small asset chart previews are also displayed on the dashboard, and each doubles as a link to its asset's full page
+ All charts are dynamically time-framed and feature five timeframes with corresponding price granularities
+ Users can create realtime 'dummy' transactions with any of the four coins at its live price

![Portfolio Chart](/app/assets/images/dashboard.png)

```Javascript
//  frontend/actions/prices_actions.js

  export const fetchPrices = (symbol, granularity) => dispatch => (
    ApiUtil.fetchPriceData(symbol, granularities[granularity])
    .then(prices => dispatch(receivePrices(symbol, granularities[granularity], prices)))
    .fail((e) => setTimeout(fetchPrices(symbol, granularity), 2000))
  );
  ```

![Asset](/app/assets/images/asset.png)

```Javascript
//  frontend/components/signed_in/dashboard/portfolio_chart.jsx

if (Object.values(this.props.prices[granularity]).length < 4) {
  this.props.getPrices('BTC', granularity)
    .then(() => setTimeout(() => this.props.getPrices('BCH', granularity)
    .then(() => setTimeout(() => this.props.getPrices('ETH', granularity)
    .then(() => setTimeout(() => this.props.getPrices('LTC', granularity), 334)), 334)), 334));
```
