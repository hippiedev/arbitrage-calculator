import styles from "./Results.module.css";
import nairaIcon from "../../assets/icons/naira.png";

const Results = ({ odds, stakeAmount, result }) => {
  console.log(odds);
  return (
    <>
      <table className={styles.Results}>
        <thead>
          <tr>
            <th>Odd</th>
            <th>Stake</th>
          </tr>
        </thead>
        <tbody>
          {odds.map((odd, index) => (
            <tr key={index}>
              <td>{odd.value}</td>
              <td><img className={styles.nairaIcon} src={nairaIcon} alt="" />{result[index].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {odds[0] ? (
        <div className={styles.ResultSummary}>
          <p>Payout: <img className={styles.nairaIcon} src={nairaIcon} alt="" />{parseInt(stakeAmount + (result[0] * odds[0].value)).toLocaleString()}</p>
          <p>
            Profit: <img className={styles.nairaIcon} src={nairaIcon} alt="" />
            {parseInt(stakeAmount - (stakeAmount - result[0] * odds[0].value)).toLocaleString()}
          </p>
        </div>
      ) : null}
    </>
  );
};

export default Results;
