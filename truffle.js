module.exports = {
  build: {
    "index.html": "index.html",
    "surge.html": "surge.html",
    "sell-order.html": "sell-order.html",
    "orders.html": "orders.html",
    "buy-order.html": "buy-order.html",
    "app.js": [
      "javascripts/app.js",
      "javascripts/appIndex.js",
      "javascripts/appSellOrder.js",
      "javascripts/utilityFunctions.js",
      "javascripts/appOrders.js",
      "javascripts/appBuyOrder.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    // "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
