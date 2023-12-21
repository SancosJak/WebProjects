import React, { useState, useEffect } from 'react';
import styles from './LoveSongsApi.module.css';

interface LoveSongsData {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

function LoveSongsComponent(): JSX.Element | null {
  const [loveSongsData, setLoveSongsData] = useState<LoveSongsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(): Promise<void> {
    try {
      const response = await fetch('https://xkcd.com/info.0.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLoveSongsData(data);
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

  if (!loveSongsData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1>{loveSongsData.title}</h1>
      <p>{`Date: ${loveSongsData.year}-${loveSongsData.month}-${loveSongsData.day}`}</p>
      <img src={loveSongsData.img} alt={loveSongsData.alt} />
      <p>{loveSongsData.safe_title}</p>
      <p>{loveSongsData.transcript}</p>
      <p>{loveSongsData.news}</p>
    </div>
  );
}

export default LoveSongsComponent;
