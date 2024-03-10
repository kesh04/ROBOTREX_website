import React from "react";
import "./Contact.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
const Conatct = () => {
  return (
    <div className="constact" id="conatct">
      <div className="container">
        <p className="con"> CONTACT </p>

        <div className="content">
          <div className="conta">
            <CiLocationOn className="icon" size={20}/>
            <div className="main">
              <p className="tag"> Location:</p>
              <p className="noraml">NIBM Kurunegala</p>
            </div>
          </div>
          <div className="conta">
            <AiOutlineMail className="icon" size={20}/>
            <div className="main">
              <p className="tag"> Email:</p>
              <p className="noraml"> robotrexku@gmail.com</p>
            </div>
          </div><div className="conta">
          <IoCallOutline   className="icon" size={20}/>
            <div className="main">
              <p className="tag"> Call:</p>
        
              <p className="noraml">KESHANA - +94702414082</p>
              <p className="noraml">RAVINDU - +94719210656</p>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conatct;
