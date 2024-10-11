import React, {useState} from 'react'
import Menu from './componenet/Menu';
import Categories from './componenet/Categories';
import items from './componenet/Data';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]
const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItem = (category)=>{
    if(category == 'all'){
      setMenuItems(items)
      return;
    }
    const newItem = items.filter((item)=>item.category == category);
    setMenuItems(newItem)
  }
  return(
    <>
    <div className='menu section'>
      <div className='title'>
       <h2>Our Filter Menu</h2>
       <div className='underline'></div>
      </div>
      <div>
        <Categories categories ={categories} filterItem={filterItem}/>
        <Menu items={menuItems} />
      </div>
    </div>
    </>
  );

};

export default App;