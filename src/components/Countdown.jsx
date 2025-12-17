import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown({ onBirthdayReached, birthdayReached }) {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    // If birthday already reached, don't start the countdown
    if (birthdayReached) {
      return;
    }

    // Configure your birthday time here
    const targetDate = (() => {
      // OPTION 1: Automatic (tomorrow at midnight)
      const now = new Date();
      return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0
      );

      // OPTION 2: Custom date (uncomment and modify)
      // return new Date('2025-12-14T00:00:00');

      // OPTION 3: Test in 10 seconds (uncomment for quick test)
      // const now = new Date();
      // return new Date(now.getTime() + 10000);
    })();

    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate - now);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ hours, minutes, seconds });

      if (diff <= 0 && !birthdayReached) {
        onBirthdayReached();
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [onBirthdayReached, birthdayReached]);

  useEffect(() => {
    setPrevTime(time);
  }, [time]);

  const Digit = ({ value, label, prevValue }) => {
    const shouldFlip = prevValue !== null && prevValue !== value;

    return (
      <div className="digit">
        <div className={`card ${shouldFlip ? "flip" : ""}`}>
          <div className="text">{String(value).padStart(2, "0")}</div>
        </div>
        <div className="label">{label}</div>
      </div>
    );
  };

  if (birthdayReached) {
    return (
      <section className="countdown">
        <div className="flip-timer">
          <span className="birthday-celebration">
            🎉 It's Your Birthday! 🎉
          </span>
        </div>
      </section>
    );
  }

  return (
    <section className="countdown">
      <div className="flip-timer">
        <Digit value={time.hours} label="Hours" prevValue={prevTime.hours} />
        <Digit
          value={time.minutes}
          label="Minutes"
          prevValue={prevTime.minutes}
        />
        <Digit
          value={time.seconds}
          label="Seconds"
          prevValue={prevTime.seconds}
        />
      </div>
      <button
        className="test-button"
        onClick={onBirthdayReached}
        title="Skip countdown and see celebration"
      >
        🎉 Test Celebration
      </button>
    </section>
  );
}

export default Countdown;
