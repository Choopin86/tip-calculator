import React, { useState, useEffect } from "react";
import EnterData from "./components/EnterData";
import TipCalculator from "./components/TipCalculator";

const tipButtons = ["5%", "10%", "15%", "25%", "50%", "Custom"];

const App = () => {
  const [tip, setTip] = useState("0%");
  const [bill, setBill] = useState("0");
  const [people, setPeople] = useState("1");
  const [tipAmount, setTipAmount] = useState("0");
  const [total, setTotal] = useState("0");

  const handleBill = (e) => {
    setBill(e.target.value);
  };

  const handleTipButtons = (button) => {
    if (tipButtons.includes(button)) {
      setTip(button);
      console.log(button);
      console.log(tip);
    }
  };

  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  useEffect(() => {
    if (bill && people && tip) {
      const calculatedTipAmount =
        (parseFloat(bill) * (parseInt(tip) / 100)) / parseInt(people);
      setTipAmount(calculatedTipAmount.toFixed(2));

      const calculatedTotal =
        parseFloat(bill) / parseInt(people) + calculatedTipAmount;
      setTotal(calculatedTotal.toFixed(2));
    }
  }, [bill, people, tip]);

  const handleReset = () => {
    setTipAmount("0");
    setTotal("0");
    setBill("");
    setTip("0");
    setPeople("");
  };

  return (
    <>
      <div className="bg-cyan-100 h-screen flex flex-col items-center justify-center">
        <div className="mb-10 text-xl tracking-widest text-teal-700">
          <h1>Spli</h1>
          <h1>tter</h1>
        </div>
        <div className=" bg-white drop-shadow-2xl rounded-[25px] flex px-6 py-2.5">
          <div>
            <EnterData
              tipButtons={tipButtons}
              onButtonPress={handleTipButtons}
              onBillChange={handleBill}
              onPeopleChange={handlePeople}
              tip={tip}
              bill={bill}
              people={people}
            />
          </div>
          <div className="my-3 ">
            <TipCalculator
              onReset={handleReset}
              tipAmount={tipAmount}
              total={total}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
