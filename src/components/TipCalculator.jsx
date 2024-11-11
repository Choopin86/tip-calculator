import React from "react";

const TipCalculator = ({
  onReset,
  tipAmountPerson,
  totalPerson,
  totalTip,
  total,
}) => {
  return (
    <div className="bg-teal-900 shadow-xl flex flex-col justify-around p-6 rounded-lg text-slate-100 w-[250px] h-full">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Tip Amount</p>
          <p className="text-xs text-slate-400">/ person</p>
        </div>
        <p className="text-3xl font-bold text-teal-400">${tipAmountPerson}</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Total</p>
          <p className="text-xs text-slate-400">/ person</p>
        </div>
        <p className="text-3xl font-bold text-teal-400">${totalPerson}</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Total Tip</p>
        </div>
        <p className="text-3xl font-bold text-teal-400">${totalTip}</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">TOTAL</p>
        </div>
        <p className="text-3xl font-bold text-teal-400">${total}</p>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <button
          onClick={onReset}
          className="bg-teal-400 w-full py-2 rounded-md text-teal-900 font-bold tracking-wide hover:bg-teal-500 transition-colors"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TipCalculator;
