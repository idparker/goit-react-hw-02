import css from "../Notification/Notification.module.css";

export default function Notification({ text, total }) {
  return !total && <p className={css.box}>{text}</p>;
}
