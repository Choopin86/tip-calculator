import React from "react";

const EnterData = ({
  tipButtons,
  onButtonPress,
  onBillChange,
  onPeopleChange,
  onCustomTip,
  bill,
  people,
  customTip,
}) => {
  return (
    <>
      <div className="mr-6 w-[250px]">
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
              onChange={onBillChange}
              placeholder="0"
            />
          </div>
        </div>
        {/*Select tip % section*/}
        <div className="text-slate-500 text-[0.8rem]">
          <h3 className="my-1">Select tip %</h3>
          <div className="grid grid-cols-2 gap-2">
            {tipButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => {
                  onButtonPress(button);
                }}
                className={`p-2 text-xl rounded-md cursor-pointer  hover:bg-teal-500 focus:bg-teal-500
                ${
                  button === "Custom"
                    ? "bg-slate-200 text-slate-800"
                    : "bg-teal-900 text-slate-200"
                }`}
              >
                {button}
              </button>
            ))}
            {customTip === true ? (
              <input
                className="bg-slate-200 rounded-md h-10 w-full pl-2 col-span-2"
                placeholder="Enter custom tip %"
                onChange={onCustomTip}
              />
            ) : null}
          </div>
        </div>
        {/*Number of people section*/}
        <div className="my-3 text-slate-500">
          <h3 className="text-[0.8rem]">Number of People</h3>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-slate-400">👤</span>
            <input
              className="bg-slate-200 rounded-md h-10 w-full pl-10 pr-2"
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
