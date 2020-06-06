import React, { useState, useEffect } from 'react';

export const useInitialState = (API) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const RES = await fetch(API);
      const DATA = await RES.json();
      setItems(DATA);
    };

    fetchData();
  }, []);

  return items;
};
