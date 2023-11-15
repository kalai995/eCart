import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebars/Sidebar";
import { useState } from "react";
import datas from "./db/data";


import Card from "./components/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");
  // ----------- Input Filter -----------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = datas.filter(
    (data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(datas, selected, query) {
    let filteredDatas = datas;

    // Filtering Input Items
    if (query) {
      filteredDatas = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredDatas = filteredDatas.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredDatas.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(datas, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />

      <Products result={result} />
    </>
  );
}
export default App;
