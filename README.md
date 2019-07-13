## README

# Coinography

[Live Demo](https://coinography.herokuapp.com/#/)

Coinography is a cryptocurrency trading platform inspired by Coinbase. This website was implemented utilizing Rails/PostgreSQL for the backend and React/Redux on the frontend. 

Coinbase Pro REST API was used to fetch price data in real-time. React's Recharts library was used for rendering price charts and user portfolios.

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
