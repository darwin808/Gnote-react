import React from "react";
import { useStore } from "../src/Store";

function EditData({
  handleedit,
  nameedit,
  setnameedit,
  msgedit,
  setmsgedit,
  deltodo,
}) {
  const {
    currentID,
    globaltitle,
    setglobaltitle,
    globalmsg,
    setglobalmsg,
  } = useStore();

  return (
    <div className=" relative  ml-auto mr-auto   rounded-md bg-white  justify-items-center ">
      <form
        action="submit"
        className="flex flex-col bg-white"
        onSubmit={handleedit}>
        <input
          className="bg-white outline-none pb-1 font-bold"
          placeholder="Title"
          type="text"
          value={globaltitle}
          onChange={(e) => {
            setglobaltitle(e.target.value);
          }}
        />
        <textarea
          className="bg-white outline-none"
          cols="30"
          rows="10"
          value={globalmsg}
          onChange={(e) => {
            setglobalmsg(e.target.value);
          }}
          placeholder="Take a note..."></textarea>
      </form>

      <button
        className="text-gray-400 hover:text-gray-700"
        onClick={() => {
          deltodo(currentID);
        }}>
        <i class="far fa-trash-alt p-1 bg-gray-300"></i>
      </button>
      <button
        onClick={handleedit}
        className="font-bold absolute right-0 text-xs pl-2 pr-2 pb-2 pt-1 rounded bg-gray-300 hover:bg-gray-400
         ">
        Done
      </button>
    </div>
  );
}

export default EditData;
