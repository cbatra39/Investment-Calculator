import Header from "../components/Header";
import Result from "../components/Result";
import UserInput from "../components/UserInput";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function calculateResult(userInputs){
  
  let result = calculateInvestmentResults(userInputs);
  console.log(result);
  return result;
}

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null
  });

  const result = calculateResult(userInputs);

  function handleOnchange(event) {
    setUserInputs((prevUserInputs) => {
      const updatedUserInputs = {
        ...userInputs,
        [event.target.id]: parseFloat(event.target.value)
      };
      console.log(updatedUserInputs);
      return updatedUserInputs;
    });
  }


  return (
    <>
      <Header />
      <UserInput handleChange={handleOnchange} />
      <Result result = {result} userInputs={userInputs}/>
    </>
  )
}

export default App;
