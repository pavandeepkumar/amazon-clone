import React from "react";
import Card2 from "./Products.js/Card";
import { useState, useEffect } from "react";
import "./Home.css";
// import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home" >
        <div className="home__container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/realmenarzo60series/assets/D85283799_Tall_Hero_3000x1200._CB602014411_.jpg"
            alt="this is the image of header body"
          />
          <Card2 />
        </div>
      </div>
    </>
  );

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch('https://dummyjson.com/products');
  //     const data = await response.json();
  //     setProducts(data.products);
  //     console.log(data.products);// Update this line
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };

  // return (
  //   <div className="home">
  //     <div className="home__container">

  //       <img
  //         className="home_image"
  //         src="https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/realmenarzo60series/assets/D85283799_Tall_Hero_3000x1200._CB602014411_.jpg"
  //         alt=""
  //       />
  //       <div className="home__row">
  //         <Product
  //         id={products.id}
  //           titel="Microsoft Surface Go Intel Core i5 12.4 inches Touchscreen Laptop (8GB Memory, Windows, 128GB SSD,Platinum), 1.11kg"
  //           price={1223456}
  //           image="https://m.media-amazon.com/images/I/51tUzSUFd+L._SX679_.jpg"
  //           rating={3}
  //         />
  //         <Product
  //         id="1234567"
  //           titel="Turet Marcos Smart Watch for Kids- Smartwatch for Boys and Girls with Camera, Games, Recorder, Phone Book, SMS, 2-Way Calling - No GPS - No App (Green)"
  //           price={200}
  //           image="https://m.media-amazon.com/images/I/41Xy0oqYa0L._SX300_SY300_QL70_FMwebp_.jpg"
  //           rating={4}
  //         />
  //       </div>
  //       <div className="home__row">
  //       <Product
  //         id="1234564567"
  //           titel="Microsoft Surface Laptop 4 AMD Ryzen 5 4680U 13.5 inches Touchscreen Laptop (8GB/256GB SSD/Windows 11 Home /Radeon Graphics/Platinum/1.265 kg) - 5PB-00023"
  //           price={2000}
  //           image="https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg"
  //           rating={4}
  //         />
  //       <Product
  //         id="1234564567"
  //           titel="Microsoft Surface Laptop 4 AMD Ryzen 5 4680U 13.5 inches Touchscreen Laptop (8GB/256GB SSD/Windows 11 Home /Radeon Graphics/Platinum/1.265 kg) - 5PB-00023"
  //           price={2000}
  //           image="https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg"
  //           rating={4}
  //         />
  //       <Product
  //         id="1234564567"
  //           titel="Microsoft Surface Laptop 4 AMD Ryzen 5 4680U 13.5 inches Touchscreen Laptop (8GB/256GB SSD/Windows 11 Home /Radeon Graphics/Platinum/1.265 kg) - 5PB-00023"
  //           price={2000}
  //           image="https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg"
  //           rating={4}
  //         />
  //       </div>
  //       <div className="home__row">
  //       <Product
  //         id="1234564567"
  //           titel="Microsoft Surface Laptop 4 AMD Ryzen 5 4680U 13.5 inches Touchscreen Laptop (8GB/256GB SSD/Windows 11 Home /Radeon Graphics/Platinum/1.265 kg) - 5PB-00023"
  //           price={2000}
  //           image="https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg"
  //           rating={4}
  //         />

  //         <Product
  //         id="1234567"
  //           titel="ADISA Laptop Backpack 31 Ltrs"
  //           price={100}
  //           image="https://m.media-amazon.com/images/I/615Q4cP02DL._UL1400_.jpg"
  //           rating={4}
  //         />
  //         <Product
  //         id="1234567"
  //           titel="ADISA Laptop Backpack 31 Ltrs"
  //           price={100}
  //           image="https://m.media-amazon.com/images/I/615Q4cP02DL._UL1400_.jpg"
  //           rating={4}
  //         />
  //         <Product
  //         id="1234567"
  //           titel="ADISA Laptop Backpack 31 Ltrs"
  //           price={100}
  //           image="https://m.media-amazon.com/images/I/615Q4cP02DL._UL1400_.jpg"
  //           rating={4}
  //         />

  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Home;
