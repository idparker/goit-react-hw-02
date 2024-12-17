import "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
  // Вроде работает
  const savedGood = localStorage.getItem("Good");
  const savedNeutral = localStorage.getItem("Neutral");
  const savedBad = localStorage.getItem("Bad");

  const [clicks, setClicks] = useState({
    good: JSON.parse(savedGood),
    neutral: JSON.parse(savedNeutral),
    bad: JSON.parse(savedBad),
  });

  const updateFeedback = (key) => {
    setClicks((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const resetClicks = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  useEffect(() => {
    localStorage.setItem("Good", clicks.good);
    localStorage.setItem("Neutral", clicks.neutral);
    localStorage.setItem("Bad", clicks.bad);
  }, [clicks.good, clicks.neutral, clicks.bad]);

  return (
    <>
      <Description
        headerName="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        onGood={() => updateFeedback("good")}
        onNeutral={() => updateFeedback("neutral")}
        onBad={() => updateFeedback("bad")}
        onReset={resetClicks}
        total={totalFeedback}
      />

      <Notification
        text={
          totalFeedback ? (
            <Feedback
              good={clicks.good}
              neutral={clicks.neutral}
              bad={clicks.bad}
            />
          ) : (
            "No FeedBack yet."
          )
        }
      />
    </>
  );
}
