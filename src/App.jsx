import React, { useState, useEffect } from "react";
import EnterData from "./components/EnterData";
import TipCalculator from "./components/TipCalculator";

const tipButtons = ["5%", "10%", "15%", "25%", "50%", "Custom"];

const App = () => {
  const [tip, setTip] = useState("0%");
  const [bill, setBill] = useState("0");
  const [people, setPeople] = useState("1");
  const [tipAmountPerson, setTipAmountPerson] = useState("0");
  const [totalPerson, setTotalPerson] = useState("0");
  const [totalTip, setTotalTip] = useState("0");
  const [total, setTotal] = useState("0");
  const [customTip, setCustomTip] = useState(false);

  const handleBill = (e) => {
    setBill(e.target.value);
  };

  const handleTipButtons = (button) => {
    button === "Custom" ? setCustomTip(true) : setTip(button);
  };

  const handleCustomTip = (e) => {
    setTip(e.target.value);
  };

  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  useEffect(() => {
    if (bill && people && tip) {
      const calculatedTipAmount =
        (parseFloat(bill) * (parseInt(tip) / 100)) / parseInt(people);
      setTipAmountPerson(calculatedTipAmount.toFixed(2));
      const calculatedTipTotal = parseFloat(bill) * (parseInt(tip) / 100);
      setTotalTip(calculatedTipTotal.toFixed(2));

      const calculatedTotalPerson =
        parseFloat(bill) / parseInt(people) + calculatedTipAmount;
      setTotalPerson(calculatedTotalPerson.toFixed(2));
      const calculatedTotal = parseFloat(bill) + calculatedTipTotal;
      setTotal(calculatedTotal.toFixed(2));
    }
  }, [bill, people, tip]);

  const handleReset = () => {
    setTipAmountPerson("0");
    setTotalPerson("0");
    setTotalTip("0");
    setTotal("0");
    setBill("");
    setTip("0");
    setPeople("1");
    setCustomTip(false);
  };

  return (
    <>
      <div className="bg-cyan-100 min-h-screen flex flex-col items-center justify-center">
        <div className="mb-10 text-xl tracking-widest text-teal-700">
          <h1>Spli</h1>
          <h1>tter</h1>
        </div>

        <div className=" bg-white drop-shadow-2xl rounded-3xl flex flex-col px-5 py-2 md:flex-row gap-5">
          <div className="w-full">
            <EnterData
              tipButtons={tipButtons}
              onButtonPress={handleTipButtons}
              onBillChange={handleBill}
              onPeopleChange={handlePeople}
              onCustomTip={handleCustomTip}
              bill={bill}
              people={people}
              customTip={customTip}
            />
          </div>

          <div className="my-3">
            <TipCalculator
              onReset={handleReset}
              tipAmountPerson={tipAmountPerson}
              totalPerson={totalPerson}
              totalTip={totalTip}
              total={total}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
