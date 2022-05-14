import { useState } from "react";
import AddOdds from "./Components/AddOdds/AddOdds";
import Results from "./Components/Results/Results";
import "./App.css";

const App = () => {
  const [stakeAmount, setStakeAmount] = useState(0);
  const [odds, setOdds] = useState([]);
  const [result, setResult] = useState([]);
  const handleCalculation = (stake, odds) => {
    setStakeAmount(stake);
    const entries = Object.values(odds);
    setOdds(entries);
    const oddResults = [];
    entries.forEach((odd) => {
      const numerator = stake * ((1 / parseFloat(odd.value)) * 100);
      const entryMethod = entries.reduce(
        (total, currEntry) => total + 1 / currEntry.value,
        0
      );
      const denominator = entryMethod * 100;
      const oddResult = parseInt(numerator / denominator);
      console.log(oddResult);
      oddResults.push(oddResult);
      console.log(oddResults);
    });
    setResult(oddResults);
  };
  return (
    <div className="App">
      <AddOdds
        calculationHandler={(stake, odds) => handleCalculation(stake, odds)}
      />
      <Results odds={odds} stakeAmount={stakeAmount} result={result} />
    </div>
  );
};

export default App;
