import React from "react";

const EnterData = ({
  tipButtons,
  onButtonPress,
  onBillChange,
  onPeopleChange,
  tip,
  bill,
  people,
}) => {
  return (
    <>
      <div className="mr-6">
        {/*Bill section*/}
        <div className="my-3 text-slate-500">
          <h3 className="text-[0.8rem]">Bill</h3>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-slate-400">$</span>
            <input
              className="bg-slate-200 rounded-md h-10 w-full pl-8 pr-2"
              type="text"
              name="bill"
              id="bill"
              value={bill}
              onChange={onBillChange}
            />
          </div>
        </div>
        {/*Select tip % section*/}
        <div className="mt-5 text-slate-500 text-[0.8rem]">
          <h3 className="my-1">Select tip %</h3>
          <div className="grid grid-cols-2 gap-y-1 gap-x-[11px]">
            {tipButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => onButtonPress(button)}
                className={`p-2 mb-2 text-xl rounded-[5px] w-24 cursor-pointer 
                  ${
                    button === "Custom"
                      ? "bg-slate-200 text-slate-800"
                      : "bg-teal-900 text-slate-200"
                  }
                  ${
                    tip === button
                      ? "border-teal-500 bg-teal-500 text-slate-200"
                      : "hover:bg-teal-500"
                  }`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        {/*Number of people section*/}
        <div className="my-3 text-slate-500">
          <h3 className="text-[0.8rem]">Number of People</h3>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-slate-400">👤</span>
            <input
              className="bg-slate-200 rounded-md h-10 w-full pl-8 pr-2"
              type="text"
              name="people"
              id="people"
              value={people}
              onChange={onPeopleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterData;
