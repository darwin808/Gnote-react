import React from "react";

const ShowData = ({ collection, deltodo, openmodal, fetdata }) => {
  return (
    <div className="gap-10 grid grid-cols-3">
      {collection.map((e) => (
        <div
          className="bg-white rounded-md shadow-md w-72 h-40 p-6 overflow-y-auto "
          key={e._id}>
          <p
            className="bg-white pb-4 font-bold"
            onClick={() => {
              openmodal(e._id);
              fetdata();
            }}>
            {" "}
            {e.name}
          </p>{" "}
          <p
            className="bg-white overflow-y-auto"
            onClick={() => {
              openmodal(e._id);
              fetdata();
            }}>
            {" "}
            {e.message}
          </p>
          <button
            onClick={() => {
              deltodo(e._id);
            }}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
