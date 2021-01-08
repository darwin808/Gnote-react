import React, { useState } from "react";

function Todo() {
  const [name, setname] = useState("");
  const [collection, setcollection] = useState([]);
  const [modal, setmodal] = useState(false);
  const [storeid, setstoreid] = useState();
  const [editedData, seteditedData] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setcollection([...collection, { name, id: Math.random() }]);
  };
  const handlechange = (e) => {
    setname(e.target.value);
  };

  const deltodo = (id) => {
    const newarr = collection.filter((e) => e.id !== id);

    setcollection(newarr);
  };

  const showmodal = (id) => {
    setmodal(true);
    setstoreid(id);
  };

  const handleediteddata = (e) => {
    seteditedData(e.target.value);
  };

  const handlesubmiteditdata = (e) => {
    e.preventDefault();
    const x = collection.map((e) =>
      e.id === storeid ? { ...e, name: editedData } : e
    );

    setcollection(x);
  };

  return (
    <div>
      <h1>TODO</h1>

      <form action="submit" onSubmit={handlesubmit}>
        <input type="text" value={name} onChange={handlechange} />
      </form>

      {modal ? (
        <form action="submit" onSubmit={handlesubmiteditdata}>
          <input type="text" onChange={handleediteddata} value={editedData} />
        </form>
      ) : null}

      <div>
        {collection.map((e) => (
          <div key={e.id}>
            {e.name}
            <button
              onClick={() => {
                deltodo(e.id);
              }}>
              DEL
            </button>
            <button
              onClick={() => {
                showmodal(e.id);
              }}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
