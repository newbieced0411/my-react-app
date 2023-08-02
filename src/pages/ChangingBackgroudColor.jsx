import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";

const ChangingBackgroundColor = () => {
  const [randomColor, setRandomColor] = useState("");

  const changeBodyColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(randomColor);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: randomColor }}
    >
      <div className="container px-10 py-8 mx-auto min-h- bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="uppercase text-5xl mb-5 tracking-tight font-extrabold text-primary-600 dark:text-primary-500">
            Background Color Changer{" "}
          </h1>
          <div className="flex justify-center">
            <div className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-10 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <ButtonComponent
                className="relative text-indigo-600 transition duration-300 group-hover:text-white ease"
                onClick={changeBodyColor}
              >
                Click to change color
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangingBackgroundColor;
