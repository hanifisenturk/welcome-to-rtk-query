import { useState, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCounterValue,
  increment,
  decrement,
  incrementByAmount,
} from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(getCounterValue);
  const [amount, setAmount] = useState(0);
  const id = useId();

  return (
    <div className=" bg-blue-400 p-4 h-full flex items-center justify-center ">
      <div className="flex items-center  gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor={id}>Increment by Amount</label>
          <input
            id={id}
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="mr-3"
            type="number"
          />
          <button
            onClick={() => dispatch(incrementByAmount(+amount))}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
