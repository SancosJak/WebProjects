import React, { useEffect, useState } from 'react';
import styles from './CryptoApi.module.css';

interface Crypto {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  openPrice: string;
  lowPrice: string;
  highPrice: string;
  lastPrice: string;
  volume: string;
  bidPrice: string;
  askPrice: string;
  at: number;
}

function CryptoDataComponent(): JSX.Element {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(): Promise<void> {
    try {
      const response = await fetch('https://api.wazirx.com/sapi/v1/tickers/24hr');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setCryptoData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div className={styles.container}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Crypto Data</h1>
      <ul>
        {cryptoData.map((crypto) => (
          <li key={crypto.symbol}>
            <p>Symbol: {crypto.symbol}</p>
            <p>Base Asset: {crypto.baseAsset}</p>
            <p>Quote Asset: {crypto.quoteAsset}</p>
            <p>Open Price: {crypto.openPrice}</p>
            <p>Low Price: {crypto.lowPrice}</p>
            <p>High Price: {crypto.highPrice}</p>
            <p>Last Price: {crypto.lastPrice}</p>
            <p>Volume: {crypto.volume}</p>
            <p>Bid Price: {crypto.bidPrice}</p>
            <p>Ask Price: {crypto.askPrice}</p>
            <p>At: {crypto.at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoDataComponent;
