import { useState, useEffect } from "react";

export default function TimeComponent() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log("Time Rendered");

  return (
    <div className="time-component rounded p-2">
      <p>{time}</p>
    </div>
  );
}
