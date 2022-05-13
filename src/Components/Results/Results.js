import styles from './Results.module.css';

const Results = ({odds, stakeAmount, result}) => {
  console.log(result)
    return (
      <table className={styles.Results}>
        <thead>
          <tr>
            <th>Odd</th>
            <th>Stake</th>
            <th>Payout</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
         {odds.map((odd, index) => (
           <tr key={index}>
           <td>
             {odd.value}
           </td>
           <td>{result[index]}</td>
           <td>{parseInt(result[index] * odd.value)}</td>
           <td>{parseInt(stakeAmount - (result[index] * odd.value))}</td>
         </tr>
         ))}
        </tbody>
      </table>
    );
}

export default Results
