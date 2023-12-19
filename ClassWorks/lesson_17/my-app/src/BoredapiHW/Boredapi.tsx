/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useMemo } from 'react';

function BoredapiInfo(): JSX.Element {
  const [activityData, setActivityData] = useState<any>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        setActivityData(data);
      } catch (error) {
        console.error('Error fetching activity:', error);
      }
    };

    fetchData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const refreshData = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      setActivityData(data);
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
  };

  const formattedData = useMemo(() => {
    if (!activityData) {
      return null;
    }

    return {
      activity: activityData.activity,
      type: activityData.type,
      participants: activityData.participants,
      price: activityData.price,
      link: activityData.link,
      accessibility: activityData.accessibility,
    };
  }, [activityData]);

  return (
    <div>
      <h1>Random data from BoredAPI</h1>
      <button onClick={refreshData}>Refresh Info</button>
      {formattedData ? (
        <>
          <p>Activity: {formattedData.activity}</p>
          <p>Type: {formattedData.type}</p>
          <p>Participants: {formattedData.participants}</p>
          <p>Price: {formattedData.price}</p>
          <p>Link: {formattedData.link}</p>
          <p>Accessibility: {formattedData.accessibility}</p>
        </>
      ) : (
        <p>Loading activity...</p>
      )}
    </div>
  );
}

export default BoredapiInfo;
