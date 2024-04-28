import css from "./Options.module.css";

export default function Options({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
  feedbackCount,
  reset,
}) {
  return (
    <div className={css.button}>
      <button onClick={onGoodFeedback}>Good</button>
      <button onClick={onNeutralFeedback}>Neutral</button>
      <button onClick={onBadFeedback}>Bad</button>
      {feedbackCount > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
