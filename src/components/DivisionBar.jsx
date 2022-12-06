import React from "react";

function DivisionBar({ width = "w-full" }) {
  return (
    <div className={`h-[35px] ${width} bg-yellow `}>
      <div className={`h-5 ${width} bg-purple rounded-b-full`} />
    </div>
  );
}

export default DivisionBar;
