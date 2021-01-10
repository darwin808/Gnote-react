import "./App.css";

import { useStore } from "../src/Store";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowData from "./ShowData";
import EditData from "./EditData";
import AddTodo from "./AddTodo";
import { motion, AnimatePresence } from "framer-motion";
import Images1 from "./Images1";

const App = () => {
  const {
    currentID,
    setcurrentID,
    showname,
    setShowname,
    globaltitle,
    globalmsg,
  } = useStore();
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
  }, [modal]);

  const fetdata = () => {
    axios
      .get("/gnote")
      .then((e) => {
        setcollection(e.data);
        // console.log(e.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/gnote", {
        name: name,
        message: msg,
      })
      .then((e) => {
        fetdata();
        console.log(e);
        setname("");
        setmsg("");
        setShowname(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deltodo = (id) => {
    fetdata();
    setmodal(false);
    axios
      .delete("/gnote/" + id)
      .then((e) => {
        fetdata();
        setmodal(false);
        setnameedit("");
        setmsgedit("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleedit = async (e) => {
    e.preventDefault();
    await axios
      .put("/gnote/" + currentID, {
        name: globaltitle,
        message: globalmsg,
      })
      .then((e) => {
        // console.log(globalmsg);
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
    setcurrentID(id);
    setShowname(false);
    // window.scrollTo(0, 0);
  };

  return (
    <div className="App flex justify-center flex-col">
      <div className="piccc">
        <Images1 />
      </div>
      <div className="addTodo">
        <AddTodo
          handlesubmit={handlesubmit}
          handlechangename={handlechangename}
          handlechangemsg={handlechangemsg}
          msg={msg}
          name={name}
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        {modal && (
          <motion.div
            className="editdata rounded-lg overflow-hidden p-4 h-2/6 shadow-2xl sm:w-2/4 md:w-2/4 lg:w-1/4 2xl:w-1/4"
            id="editmodal"
            initial={{
              scale: 0,
              opacity: 0,
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              position: "fixed",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}>
            <EditData
              deltodo={deltodo}
              handleedit={handleedit}
              nameedit={nameedit}
              setnameedit={setnameedit}
              msgedit={msgedit}
              setmsgedit={setmsgedit}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {modal && (
        <div
          id="backdrop"
          onClick={() => {
            setmodal(false);
          }}></div>
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
