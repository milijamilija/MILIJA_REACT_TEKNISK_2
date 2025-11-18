import { useState, useEffect } from "react";

export default function CountDown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;

    const timer = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      {count > 0 ? (
        <h1>Countdown: {count}</h1>
      ) : (
        <h1>Gratulerer med dagen!</h1>
      )}
    </div>
  );
}
