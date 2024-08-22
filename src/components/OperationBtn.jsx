import React from "react";
import { choose_operation } from "../features/counter/counterSlice";

const OperationBtn = ({ operation, dispatch }) => {
  return (
    <div
      className=" border-2 p-3 flex items-center justify-center"
      onClick={() => dispatch(choose_operation(operation))}
    >
      {operation}
    </div>
  );
};

export default OperationBtn;
