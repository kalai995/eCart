import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} className="brand" value=""     title="All Products" />
          <Button onClickHandler={handleClick} className="brand" value="Titan" title="Titan" />
          <Button onClickHandler={handleClick} className="brand" value="Casio" title="Casio" />
          <Button onClickHandler={handleClick} className="brand" value="Fossil" title="Fossil" />
          <Button onClickHandler={handleClick} className="brand" value="Timex" title="Timex" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
