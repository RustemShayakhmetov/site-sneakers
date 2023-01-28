import React, {useState, useEffect} from "react";

import Card from "./components/Card/Card"
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
   const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [cartOpened, setCartOpened] = useState(false);

   useEffect(() => {
      fetch('https://63d50eadc52305feff6d3dbd.mockapi.io/items')
         .then((res) => {
            return res.json()
         })
         .then((json) => {
            setItems(json)
         })
   }, []);

   const onAddToCard = (obj) => {
      setCartItems(prevState => {
         [...prevState, obj]
      })
   }

   return (
      <div className="wrapper clear">
         {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems}/>}
         <Header onClickCart={() => setCartOpened(true)}/>
         <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
               <h1 className="">Все кроссовки</h1>
               <div className="search-block d-flex">
                  <img src="img/search.svg" alt="Search" />
                  <input placeholder="Поиск..."/>
               </div>
            </div>
            <div className="d-flex flex-wrap">
               { items.map((item) => (
                  <Card
                     title={item.title}
                     price={item.price}
                     imageUrl={item.imageUrl}
                     onFavorite={() => console.log(item)}
                     onPlus={(obj) => onAddToCard(obj)}
                  />
               ))}
            </div>
         </div>
      </div>
  );
}

export default App;
