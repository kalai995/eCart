import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Analog"
          title="Analog"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Smart-Analog"
          title="Smart-Analog"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Digital"
          title="Digital"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Hybrid-Smart"
          title="Hybrid-Smart"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
