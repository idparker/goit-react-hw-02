import css from "../Feedback/FeedBack.module.css";

export default function Feedback({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const positive = total ? Math.round(((good + neutral / 2) / total) * 100) : 0;

  return (
    <>
      {/* <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p> */}

      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
}
