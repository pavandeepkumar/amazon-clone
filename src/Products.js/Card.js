import { Space, Image } from "antd";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import ReactStars from "react-rating-star-with-type";
import { Rate } from "antd";
// import ProductDetails from "./ProductDetails";

const Card2 = () => {
  const [products, setProducts] = useState([]);
  const [star, setStar] = useState(5);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products); // Update this line
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const onChange = (nextValue) => {
    setStar(nextValue);
  };

  return (
    <div  style={{overflow:"scroll"}}>
    <Row gutter={16}>
      <div
      
        className="product_container"
        style={{
          display: "flex",
          height: 600,
          width: 1650,
          overflowY:"scroll",
          
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <Space direction="vertical" size={5}>
              <Col span={24}>
                <Card
                // title={product.title}

                // style={{ width: 300 }}
                >
                  <p>
                    <Card
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <a href="#">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          style={{
                            objectFit: "cover",
                            height: 250,
                            width: 200,
                          }}
                        />
                      </a>
                    </Card>
                    <>
                      <h4 style={{ fontSize: 20 }}>{product.title}</h4>
                      <p>
                        <b style={{ fontSize: 20 }}>
                          &#8377;{" "}
                          {parseFloat(
                            product.price -
                              (product.price * product.discountPercentage) / 100
                          ).toFixed(2)}{" "}
                        </b>
                        <del>
                          <small> &#8377;{product.price}</small>
                        </del>
                        <strong style={{ color: "blue" }}>
                          {" "}
                          {product.discountPercentage}% <b>Off</b>
                        </strong>
                        <p style={{ color: "green", fontWeight: "bold" }}>
                          FREE Delevery{" "}
                          <del
                            style={{ color: "black", fontWeight: "lighter" }}
                          >
                            {" "}
                            &#8377;70
                          </del>
                        </p>
                      </p>
                      <p> {product.description}</p>
                      <Rate allowHalf defaultValue={product.rating} />
                      {/* <ReactStars
                    onChange={onChange}
                    value={product.rating}
                    edit={true}
                    activeColors={["red", "orange", "#FFCE00", "#FFFF00", "#FFFF00"]}
                  /> */}
                    </>
                  </p>
                </Card>
              </Col>
            </Space>
            {/* <ProductDetails price={product.price} /> */}
          </div>
        ))}
      </div>
    </Row>
    </div>
  );
};

export default Card2;

// import { Card, Space } from "antd";
// import { useEffect, useState } from "react";
// import ReactStars from "react-rating-star-with-type";
// import ProductDetails from "./ProductDetails";

// const Card2 = () => {
//   const [products, setProducts] = useState([]);
//   const [star, setStar] = useState(5);

//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       setProducts(data.products);
//       console.log(data.products); // Update this line
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const onChange = (nextValue) => {
//     setStar(nextValue);
//   };
//   return (
//     <div
//       className="product_container"
//       style={{
//         display: "flex",

//         height: 200,
//         width: 250,
//       }}
//     >
//       {products.map((product) => (
//         <div key={product.id}>
//           <Space direction="horizontal" size={24}>
//             <Card
//               title={product.title}
//               extra=<a href="../components/ProductDetails">More</a>
//               style={{
//                 width: 300,
//               }}
//             >
//               <p>
//                 <Card>
//                   <a href="./ProductDetails">
//                     <img
//                       src={product.images}
//                       alt={product.title}
//                       style={{
//                         display: "flex",
//                         objectFit: "cover",
//                         height: 250,
//                         width: 200,
//                       }}
//                     />
//                   </a>
//                 </Card>
//                 <>
//                   <h4>{product.title}</h4>
//                   <p>
//                     <b>
//                       Price :<span>&#8377;</span>
//                     </b>
//                     {product.discountPercentage}{" "}
//                     <del>
//                       {" "}
//                       <b>
//                         <span>&#8377;</span>
//                       </b>
//                       {product.price}{" "}
//                     </del>
//                   </p>
//                   <p>Description : {product.description}</p>
//                   <ReactStars
//                     onChange={onChange}
//                     value={product.rating}
//                     edit={true}
//                     activeColors={[
//                       "red",
//                       "orange",
//                       "#FFCE00",
//                       "#FFFF00",
//                       "#FFFF00",
//                     ]}
//                   />
//                 </>
//               </p>
//             </Card>
//           </Space>
//           {/* <ProductDetails price={product.price} /> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card2;
