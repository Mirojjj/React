import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OperationBtn from "../components/operationBtn";
import DigitBtn from "../components/DigitBtn";
import { backSpace, clear, showResult } from "../features/counter/counterSlice";

const Redux = () => {
  const curr = useSelector((state) => state.counter.curr);
  const operation = useSelector((state) => state.counter.operation);
  const result = useSelector((state) => state.counter.result);
  const dispatch = useDispatch();

  return (
    <div className=" mx-auto w-[90%] h-screen flex items-center justify-center">
      <div className="border-2 w-96  flex flex-col justify-start items-center px-3 py-4">
        <div className="screen w-full min-h-20 border-2 px-2 py-2">
          {curr}
          {/* {operation} */}
          {result != "0" && <p>{result}</p>}
        </div>
        <div className=" h-80 w-full grid grid-cols-4 gap-3 mt-4">
          <div
            className="C border-2 p-3 flex items-center justify-center"
            onClick={() => dispatch(clear())}
          >
            C
          </div>
          <OperationBtn operation={"/"} dispatch={dispatch} />
          <OperationBtn operation={"*"} dispatch={dispatch} />
          <div
            className="border-2 p-3 flex items-center justify-center"
            onClick={() => dispatch(backSpace())}
          >
            DEL
          </div>
          <DigitBtn digit={9} dispatch={dispatch} />
          <DigitBtn digit={8} dispatch={dispatch} />
          <DigitBtn digit={7} dispatch={dispatch} />
          <OperationBtn operation={"-"} dispatch={dispatch} />
          <DigitBtn digit={6} dispatch={dispatch} />
          <DigitBtn digit={5} dispatch={dispatch} />
          <DigitBtn digit={4} dispatch={dispatch} />
          <OperationBtn operation={"+"} dispatch={dispatch} />
          <DigitBtn digit={3} dispatch={dispatch} />
          <DigitBtn digit={2} dispatch={dispatch} />
          <DigitBtn digit={1} dispatch={dispatch} />
          <DigitBtn digit={0} dispatch={dispatch} />
          <div
            className=" border-2 col-span-4 p-3 text-center flex items-center justify-center"
            onClick={() => dispatch(showResult())}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redux;
