import { useState, useEffect } from 'react';

function getTime() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

const useTime = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => setTime(getTime()), 1000);
  }, []);

  return time;
};

export default useTime;
