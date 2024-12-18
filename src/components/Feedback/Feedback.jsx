import css from "../Feedback/Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positive }) {
  // const total = good + neutral + bad;
  // const positive = total ? Math.round(((good + neutral / 2) / total) * 100) : 0;

  return (
    total > 0 && (
      <>
        <ul className={css.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positive}%</li>
        </ul>
      </>
    )
  );
}
