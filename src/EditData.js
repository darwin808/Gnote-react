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
  const { currentID } = useStore();

  return (
    <div className="relative  ml-auto mr-auto   rounded-md bg-white  justify-items-center ">
      <form
        action="submit"
        className="flex flex-col bg-white"
        onSubmit={handleedit}>
        <input
          className="bg-white outline-none pb-1"
          placeholder="edit here..."
          type="text"
          value={nameedit}
          onChange={(e) => {
            setnameedit(e.target.value);
          }}
        />
        <textarea
          className="bg-white outline-none"
          cols="30"
          rows="7"
          value={msgedit}
          onChange={(e) => {
            setmsgedit(e.target.value);
          }}
          placeholder="editemsg..."></textarea>
      </form>

      <button
        className="text-gray-400"
        onClick={() => {
          deltodo(currentID);
        }}>
        <i class="far fa-trash-alt p-1 bg-gray-300"></i>
      </button>
      <button
        onClick={handleedit}
        className="absolute right-0 text-xs pl-2 pr-2 pb-2 pt-1 rounded bg-gray-300
         ">
        Done
      </button>
    </div>
  );
}

export default EditData;
