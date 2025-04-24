import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import { Container } from 'react-bootstrap';
import Header from './component/Header';
import Category from './component/Category';
import ItemsList from './component/ItemsList';
import { items } from './component/data';
import { useState } from 'react';

function App() {

  const [itemsData, setItemsData] = useState(items);
  
  const allCategory = ['الكل', ...new Set(items.map((i) => i.Category))];
  console.log(allCategory);

  // filter by category
  const filterByCategory = (category) => {
    if (category === 'الكل') {
      setItemsData(items);
    } else {
      const filteredItems = items.filter(item => item.Category === category);
      setItemsData(filteredItems);
    }
  };

  // filter by search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter(item => item.title === word); 
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} /> 
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
