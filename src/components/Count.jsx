import React, { useRef } from "react";
import useCountStore from "../../countStore";
import NavBar from "./NavBar";

function Count() {
  const count = useCountStore((state) => state.count);
  const increBy1 = useCountStore((state) => state.increBy1);
  const decreBy1 = useCountStore((state) => state.decreBy1);
  const addValueByInput = useCountStore((state) => state.addValueByInput);
  const numAddEle = useRef();
  const addValue = () => {
    const num = Number(numAddEle.current.value);
    console.log(`Type Of Number : ${typeof num}`);

    addValueByInput(num);
    numAddEle.current.value = "";
  };
  return (
    <div>
      <div className="navDiv">
        <NavBar />
      </div>
      <div className="countDiv">
        <h1 className="bg-orange-500 text-white text-center p-2 m-2 rounded-full">
          The Count Value Is : <b>{count}</b>
        </h1>

        <div className="btnDIv flex flex-row justify-around items-center">
          <button
            className="bg-green-700
          text-white text-center p-2 m-2 rounded-full
          "
            onClick={increBy1}
          >
            +1
          </button>
          <button
            className="bg-red-700
          text-white text-center p-2 m-2 rounded-full
          "
            onClick={decreBy1}
          >
            -1
          </button>
          <div className="numAddDiv">
            <input
              type="number"
              placeholder="Pease Enter A Number : "
              className="
          border-2 border-black p-2 m-2  rounded-full
          "
              ref={numAddEle}
            />
            <button
              className="bg-green-700
          text-white text-center p-2  rounded-full
          "
              onClick={addValue}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
