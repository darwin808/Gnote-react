import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowData from "./ShowData";
import EditData from "./EditData";
import AddTodo from "./AddTodo";
import { motion } from "framer-motion";

const App = () => {
  const [name, setname] = useState("");
  const [msg, setmsg] = useState("");
  const [collection, setcollection] = useState([]);
  const [modal, setmodal] = useState(false);
  const [editId, seteditID] = useState(0);
  const [nameedit, setnameedit] = useState("");
  const [msgedit, setmsgedit] = useState("");

  const handlechangename = (e) => {
    setname(e.target.value);
  };
  const handlechangemsg = (e) => {
    setmsg(e.target.value);
  };
  useEffect(() => {
    fetdata();
  }, []);

  const fetdata = async () => {
    await axios
      .get("http://localhost:1234/gnote")
      .then((e) => {
        setcollection(e.data);
        console.log(e.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1234/gnote", {
        name: name,
        message: msg,
      })
      .then((e) => {
        fetdata();
        console.log(e);
        setname("");
        setmsg("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deltodo = async (id) => {
    await axios.delete("http://localhost:1234/gnote/" + id).then((e) => {
      console.log(e);
      fetdata();
    });
  };

  const handleedit = async (e) => {
    e.preventDefault();
    await axios
      .put("http://localhost:1234/gnote/" + editId, {
        name: nameedit,
        message: msgedit,
      })
      .then((e) => {
        console.log(e);
        fetdata();
        setmodal(false);
        setnameedit("");
        setmsgedit("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openmodal = (id) => {
    setmodal(true);
    seteditID(id);
  };

  return (
    <div className="App flex justify-center flex-col">
      <div className="addTodo">
        <AddTodo
          handlesubmit={handlesubmit}
          handlechangename={handlechangename}
          handlechangemsg={handlechangemsg}
          msg={msg}
          name={name}
        />
      </div>

      {modal && (
        <motion.div
          className="editdata"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 50, transitionDuration: 2 }}>
          <EditData
            handleedit={handleedit}
            nameedit={nameedit}
            setnameedit={setnameedit}
            msgedit={msgedit}
            setmsgedit={setmsgedit}
          />
        </motion.div>
      )}

      <div className="showdata  ml-auto mr-auto">
        <ShowData
          collection={collection}
          deltodo={deltodo}
          openmodal={openmodal}
          fetdata={fetdata}
        />
      </div>
    </div>
  );
};

export default App;
