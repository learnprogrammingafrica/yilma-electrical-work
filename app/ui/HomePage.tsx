import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20"></div>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"></div>
    </div>
  );
};

export default HomePage;
