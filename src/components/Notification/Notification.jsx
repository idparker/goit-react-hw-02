import css from "../Notification/Notification.module.css";

export default function Notification({ text }) {
  return <div className={css.box}>{text}</div>;
}
