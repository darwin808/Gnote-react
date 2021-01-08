import React from "react";

function EditData({ handleedit, nameedit, setnameedit, msgedit, setmsgedit }) {
  return (
    <div className="relative p-6 shadow-md  mt-32 ml-auto mr-auto mb-16   rounded-md bg-white w-6/12  justify-items-center">
      <form action="submit" onSubmit={handleedit}>
        <input
          placeholder="edit here..."
          type="text"
          value={nameedit}
          onChange={(e) => {
            setnameedit(e.target.value);
          }}
        />
        <textarea
          cols="30"
          rows="10"
          value={msgedit}
          onChange={(e) => {
            setmsgedit(e.target.value);
          }}
          placeholder="editemsg..."></textarea>
      </form>
    </div>
  );
}

export default EditData;
