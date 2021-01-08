import React from "react";
import { useStore } from "../src/Store";

function AddTodo({
  handlechangename,
  handlesubmit,
  handlechangemsg,
  msg,
  name,
}) {
  const { showname, setShowname } = useStore();
  return (
    <div className="relative p-6 shadow-md  mt-32 ml-auto mr-auto mb-16   rounded-md bg-white w-6/12  justify-items-center ">
      <form
        className="flex flex-col bg-white"
        action="submit"
        onSubmit={handlesubmit}>
        {showname && (
          <input
            placeholder="Name"
            className="bg-white outline-none pb-1"
            type="text"
            value={name}
            onChange={handlechangename}
          />
        )}

        <textarea
          placeholder="Take a note..."
          className="bg-white outline-none"
          cols="5"
          rows="5"
          value={msg}
          onClick={() => {
            setShowname(true);
          }}
          onChange={handlechangemsg}></textarea>
      </form>

      <div className="bg-green-500 font-bold text-lg rounded-full p-2 absolute right-0 mr-6">
        <span
          onClick={handlesubmit}
          className="px-2 bg-green-500 text-white text-xl cursor-pointer">
          +
        </span>
      </div>
    </div>
  );
}

export default AddTodo;
