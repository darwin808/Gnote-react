import React from "react";
import logo1 from "../src/Models/react.png";
import logo2 from "../src/Models/node.png";
import logo3 from "../src/Models/express.png";
import logo4 from "../src/Models/mongodb.png";

function Images() {
  return (
    <div className="flex flex-row items-center justify-center mt-6">
      <img src={logo1} alt="react" width="80" /> +
      <img src={logo2} alt="react" width="80" /> +
      <img src={logo3} alt="react" width="80" /> +
      <img src={logo4} alt="react" width="80" />
    </div>
  );
}

export default Images;
