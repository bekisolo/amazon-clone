import { useContext, useEffect, useState } from "react";
import { auth } from "./Utility/firebase";
import "./App.css";
import Routing from "./Routing.jsx";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
// import Header from "./Components/Header/Header.jsx";
// import CarouselEffect from "./Components/Carousel/CarouselEffect.jsx";
// import Category from "./Components/Category/Category.jsx";
// import Product from "./Components/Product/Product.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  
  return (
    <>
      {/* <Header />
      <CarouselEffect />
      <Category />
      <Product /> */}
      <Routing />
    </>
  );
}

export default App;
