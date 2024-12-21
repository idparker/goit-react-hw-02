import "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
  const getClicks = () => {
    return {
      good: JSON.parse(localStorage.getItem("Good")) || 0,
      neutral: JSON.parse(localStorage.getItem("Neutral")) || 0,
      bad: JSON.parse(localStorage.getItem("Bad")) || 0,
    };
  };

  const [clicks, setClicks] = useState(getClicks);

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
  const positiveFeedback = totalFeedback
    ? Math.round((clicks.good / totalFeedback) * 100)
    : 0;

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

      <Notification text={"No Feedback Yet"} total={totalFeedback} />

      {totalFeedback > 0 && (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          // Перенес total и positive из компонента в App пропсом, а не внутри компонента
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
}
