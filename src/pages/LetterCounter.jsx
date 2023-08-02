import { useState } from "react";

const LetterCounter = () => {
  const [countInputs, setCountInputs] = useState(0);

  const CountInputs = (e) => {
    setCountInputs(e.target.value.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container px-10 py-8 mx-auto min-h- bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="uppercase text-5xl mb-5 tracking-tight font-extrabold text-primary-600 dark:text-primary-500">
            Inputs Counter
          </h1>
          <div className="flex justify-center">
            <div className="w-full max-w-xs mx-auto">
              <input
                type="text"
                name="texts"
                id="texts"
                onChange={CountInputs}
                className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Counts: {countInputs}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterCounter;
