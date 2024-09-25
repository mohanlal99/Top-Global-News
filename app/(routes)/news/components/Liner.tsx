import React from "react";

const Liner: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="relative text-center my-4">
      <div className="absolute inset-0 flex items-center justify-center space-y-1 flex-col  ">
        <div className="w-full border-t border-defalut-500" />
        <div className="w-full border-t border-defalut-500" />
        <div className="w-full border-t border-success-500" />
        <div className="w-full border-t border-defalut-500" />
        <div className="w-full border-t border-defalut-500" />
      </div>
      <div className="relative uppercase inline-block px-2 items-center bg-white dark:bg-gray-900 dark:text-white text-black text-lg font-extrabold">
        <span className="font-extrabold rounded-sm text-primary text-xl">
          {"[ "}
        </span>
        {name}
        <span className="text-primary text-xl font-extrabold rounded-sm">
          {" ]"}
        </span>
      </div>
    </div>
  );
};

export default Liner;
