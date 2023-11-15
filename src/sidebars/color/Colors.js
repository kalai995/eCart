import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function colors({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Colors</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name="test1" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="Black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="Blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="Red"
        />

        <Input
          handleChange={handleChange}
          value="silver"
          title="Silver"
          name="test1"
          color="Silver"
        />
        <Input
          handleChange={handleChange}
          value="rose-gold"
          title="Rose-Gold"
          name="test1"
          color="rose-Gold"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
}

export default colors;
