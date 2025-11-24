import React from "react";
import NavBar from "./NavBar";
import useCounterStore from "../../counterStore";

function Counter() {
  const counterArray = useCounterStore((state) => state.counterArray);
  const addCounter = useCounterStore((state) => state.addCounter);
  const valueIncreBy1 = useCounterStore((state) => state.valueIncreBy1);
  const deleteCounter = useCounterStore((state) => state.deleteCounter);
  const valueDecreBy1 = useCounterStore((state) => state.valueDecreBy1);
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>

      <div className="counterBtn">
        <button
          className="bg-blue-700 text-white p-2 m-2 rounded-full"
          onClick={addCounter}
        >
          Counter+
        </button>
      </div>

      <div className="counterDiv">
        <ul className="text-center m-2">
          {counterArray.map((counter) => (
            <li key={counter.id}>
              Id : {counter.id}, value : {counter.value}
              <button
                className="bg-green-600 text-center text-white p-2 m-2 rounded-full"
                onClick={() => valueIncreBy1(counter.id)}
              >
                +value
              </button>
              <button
                className="bg-orange-700 text-white text-center p-2 m-2 rounded-full"
                onClick={() => valueDecreBy1(counter.id)}
              >
                -value
              </button>
              <button
                className="bg-red-700 text-white text-center p-2 m-2 rounded-full"
                onClick={() => deleteCounter(counter.id)}
              >
                Dlt
              </button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Counter;
