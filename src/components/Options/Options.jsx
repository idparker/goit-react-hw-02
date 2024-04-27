import css from "./Options.module.css";

export default function Options({ good, neutral, bad, isreset, reset }) {
  return (
    <div className={css.button}>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
      {isreset && <button onClick={reset}>Reset</button>}
    </div>
  );
}
