import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const savedGood = parseInt(localStorage.getItem("good"));
  const savedNeutral = parseInt(localStorage.getItem("neutral"));
  const savedBad = parseInt(localStorage.getItem("bad"));

  const totalSaved = savedGood + savedBad + savedNeutral;

  const [good, setGood] = useState(savedGood);
  const [neutral, setNeutral] = useState(savedNeutral);
  const [bad, setBad] = useState(savedBad);
  const [hideFeedback, setHideFeedback] = useState(totalSaved !== 0);
  const [showReset, setShowReset] = useState(totalSaved !== 0);

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);

    setHideFeedback(false);
    setShowReset(false);

    localStorage.setItem("good", 0);
    localStorage.setItem("neutral", 0);
    localStorage.setItem("bad", 0);
  };

  const handleGood = () => {
    setGood(good + 1);
    setHideFeedback(true);
    setShowReset(true);
    localStorage.setItem("good", good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setHideFeedback(true);
    setShowReset(true);
    localStorage.setItem("neutral", neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setHideFeedback(true);
    setShowReset(true);
    localStorage.setItem("bad", bad + 1);
  };

  const totalFeedback = good + neutral + bad;
  const PositiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  useEffect(() => {
    document.title = `You clicked ${totalFeedback} times`;
  });

  return (
    <>
      <Description
        title="Sip Happens Café"
        desc="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        good={handleGood}
        neutral={handleNeutral}
        bad={handleBad}
        isreset={showReset}
        reset={handleReset}
      />

      {hideFeedback ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={PositiveFeedback}
        />
      ) : (
        <Notification text="No Feedback yet" />
      )}
    </>
  );
}
