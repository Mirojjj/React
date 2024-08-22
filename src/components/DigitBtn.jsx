import React from "react";
import { add_digit } from "../features/counter/counterSlice";

function DigitBtn({ digit, dispatch }) {
  return (
    <div
      className=" border-2 p-3 flex items-center justify-center"
      onClick={() => dispatch(add_digit(digit))}
    >
      {digit}
    </div>
  );
}

export default DigitBtn;
