import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/variables.css';
import './styles/index.css';

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import ItemDetail from "./Components/ItemDetail";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";

const App = () => {

  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:768px").matches)
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [basketCount, setBasketCount] = useState(0); 
  const [basket, setBasket] = useState([]); 


  const addToBasket = ( pItem ) => {
    // pass the item through
    // check if the item is already in the basket
    let addNew = true;
    basket.forEach(b => {
      if (b.id === pItem.id) {
        b.count++;
        addNew = false;
      }
    }); 

    let vBasket = [...basket];
    if(addNew)  {
      let vItem = pItem;
      vItem.count = 1; 
      vBasket.push(vItem);
    }
    setBasket(vBasket);

  }

  const removeFromBasket = (pItem) => {
    basket.forEach(b => {
      if (b.id === pItem.id) {
        b.count--;
      }
    });

    let newBasket = basket.filter(b => b.count > 0)
    setBasket(newBasket);
  }



  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setIsMobile(window.matchMedia("(max-width:768px").matches);
  }

  useEffect(()=> {
    const timeout = setTimeout(() => {
      resizeWindow(); 
      window.addEventListener("resize", resizeWindow); 

    }, 500)
    return () => {
      window.removeEventListener("resize", resizeWindow)
      clearTimeout(timeout);
    }
  }, [windowWidth, windowHeight])

  useEffect(() => {
    let vBasket = [...basket]; 
    let count = vBasket.reduce((prev, curr) => {
      return prev + curr.count;
    },0)
    console.log(count);
    setBasketCount(count);
  }, [basket])

  return (
    <div className="grid grid-main">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}> 
        <Nav isMobile={isMobile} basketCount={basketCount} basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop isMobile={isMobile} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basket={basket}/>} />
          <Route path="/shop/:id" element={<ItemDetail addToBasket={addToBasket} removeFromBasket={removeFromBasket} basket={basket} isMobile={isMobile}/>} />
          <Route path="/checkout" element={<Checkout basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket}/>} />
          <Route path="/basket" element={<Checkout title="Basket" basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket}/>} />
          <Route path="/search/:searchTerm" element={<Shop title="Basket" basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} isMobile={isMobile}/>} />

        </Routes>
        <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
