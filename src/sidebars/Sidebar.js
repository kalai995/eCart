import { BsCartCheck } from "react-icons/bs";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./color/Colors";

import "./Sidebar.css";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            eCart
            <BsCartCheck />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
