import React, { useState } from "react";
import { useStore } from "../src/Store";
import { motion } from "framer-motion";

const ShowData = ({ collection, deltodo, openmodal, fetdata }) => {
  const { setglobaltitle, setglobalmsg } = useStore();
  const [showedit, setshowedit] = useState(0);

  const showeditbtn = (id) => {
    collection.map((e) =>
      e._id === id ? setshowedit(false) : setshowedit(true)
    );

    // console.log(showedit);
    // console.log(id);
  };

  return (
    <div className="gap-10 grid xl:grid-cols-3 sm:grid-cols-none md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {collection.map((e) => (
        <motion.div
          // initial={{ opacity: 0, scale: 0, rotate: 0 }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          //   rotate: [0, 0, 270, 270, 0],
          //    scale: [1, 2, 2, 1, 1],
          //   transition: {
          //     duration: 1,
          //     ease: "easeInOut",
          //   },
          // }}
          className="bg-white rounded-md w-72 h-40 p-6 overflow-y-auto hover:shadow-lg cursor-pointer "
          key={e._id}
          onClick={() => {
            openmodal(e._id);
            fetdata();
            setglobaltitle(e.name);
            setglobalmsg(e.message);
          }}>
          <p
            className="bg-white pb-4 font-bold relative"
            onClick={() => {
              openmodal(e._id);
              fetdata();
              setglobaltitle(e.name);
              setglobalmsg(e.message);
            }}>
            {e.name}

            <span className="absolute right-0 top-0 text-gray-600 bg-white opacity-0 hover:opacity-100 cursor-pointer text-base">
              {" "}
              <i class="fas fa-pen bg-white "></i>
            </span>
          </p>
          <p
            className="bg-white overflow-y-auto"
            onClick={() => {
              openmodal(e._id);
              fetdata();
              setglobaltitle(e.name);
              setglobalmsg(e.message);
            }}>
            {" "}
            {e.message}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
export default ShowData;
