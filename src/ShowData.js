import React, { useState } from "react";
import { useStore } from "../src/Store";
import { motion } from "framer-motion";

const ShowData = ({ collection, deltodo, openmodal, fetdata }) => {
  const { setglobaltitle, setglobalmsg } = useStore();
  const [showedit, setshowedit] = useState(false);

  const showeditbtn = (id) => {
    collection.map((e) =>
      e._id === id ? setshowedit(false) : setshowedit(true)
    );

    console.log(showedit);
    console.log(id);
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
          className="bg-white rounded-md w-72 h-40 p-6 overflow-y-auto hover:shadow-lg border border-grey-600"
          key={e._id}>
          <p
            className="bg-white pb-4 font-bold relative"
            onMouseEnter={() => {
              showeditbtn(e._id);
            }}
            onClick={() => {
              openmodal(e._id);
              fetdata();
              setglobaltitle(e.name);
              setglobalmsg(e.message);
            }}>
            {e.name}
            {showedit && (
              <span className="absolute right-0 top-0 text-gray-600 bg-white block cursor-pointer text-base">
                <i class="fas fa-pen bg-white "></i>
              </span>
            )}
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
