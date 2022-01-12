import styles from './Results.module.css';

const Results = () => {
    return (
      <table className={styles.Results}>
        <tr>
          <th>Odd</th>
          <th>Stake</th>
          <th>Payout</th>
          <th>Profit</th>
        </tr>
        <tr>
          <td>1</td>
          <td>#100,000</td>
          <td>#120,000</td>
          <td>#20,000</td>
        </tr>
      </table>
    );
}

export default Results
