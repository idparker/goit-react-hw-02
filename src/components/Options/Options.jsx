export default function Options({ onGood, onNeutral, onBad, onReset, total }) {
  //   const total = onGood.length + onNeutral.length + onBad.length;

  //   const [total, setTotal] = useState(false);

  //   const totalHandler = () => {
  //     onGood + onNeutral + onBad > total && setTotal(true);
  //   };
  //  Это я велосипед создавал)

  return (
    <>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </>
  );
}
