
const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "-2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "-6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

const body = document.body;

const table = document.createElement("table");
table.style.width = "80%";
table.style.margin = "20px auto";
table.style.borderCollapse = "collapse";
body.append(table);


const headerRow = document.createElement("tr");
const headers = ["Name", "Ticker", "Value", "Change"];
headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    th.style.padding = "12px";
    th.style.backgroundColor = "#6200ee";
    th.style.color = "#fff";
    th.style.textAlign = "center";
    headerRow.append(th);
});
table.append(headerRow);


data.forEach(item => {
    const row = document.createElement("tr");

    
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;

    
    const tickerCell = document.createElement("td");
    tickerCell.textContent = item.ticker;

    
    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;

    
    const changeCell = document.createElement("td");
    changeCell.textContent = item.change;

    const changeValue = parseFloat(item.change);
    changeCell.style.color = changeValue > 0 ? "green" : changeValue < 0 ? "red" : "";
    changeCell.style.fontWeight = "bold";

    
    [nameCell, tickerCell, valueCell, changeCell].forEach(cell => {
        cell.style.padding = "12px";
        cell.style.border = "1px solid #ddd";
        cell.style.textAlign = "center";
    });

   
    row.append(nameCell);
    row.append(tickerCell);
    row.append(valueCell);
    row.append(changeCell);

    table.append(row);
});
