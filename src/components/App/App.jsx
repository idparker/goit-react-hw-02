import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: parseInt(localStorage.getItem("good")),
    neutral: parseInt(localStorage.getItem("neutral")),
    bad: parseInt(localStorage.getItem("bad")),
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const handleFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("good", feedback.good);
    localStorage.setItem("neutral", feedback.neutral);
    localStorage.setItem("bad", feedback.bad);
  }, [feedback]);

  useEffect(() => {
    document.title = `You clicked ${totalFeedback} times`;
  }, [totalFeedback]);

  return (
    <>
      <Description
        title="Sip Happens Café"
        desc="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        onGoodFeedback={() => handleFeedback("good")}
        onNeutralFeedback={() => handleFeedback("neutral")}
        onBadFeedback={() => handleFeedback("bad")}
        feedbackCount={totalFeedback}
        reset={handleReset}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification text="No Feedback yet" />
      )}
    </>
  );
}
