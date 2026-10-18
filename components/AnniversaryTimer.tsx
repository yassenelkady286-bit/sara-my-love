"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date("2024-11-11T00:00:00+02:00");

function getElapsed(now: number) {
  const diff = Math.max(0, now - START_DATE.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function AnniversaryTimer() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const time = getElapsed(now ?? START_DATE.getTime());
  const items = [
    { label: "DAYS", value: time.days.toLocaleString("en-US") },
    { label: "HOURS", value: String(time.hours).padStart(2, "0") },
    { label: "MINUTES", value: String(time.minutes).padStart(2, "0") },
    { label: "SECONDS", value: String(time.seconds).padStart(2, "0") },
  ];

  return (
    <div className="timer-grid" aria-label="Time since November 11, 2024">
      {items.map((item) => (
        <div className="timer-unit" key={item.label}>
          <span className="timer-value">{item.value}</span>
          <span className="timer-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
