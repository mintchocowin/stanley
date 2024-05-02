import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import "./ProductSlide.css";
import { useState } from "react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductSlide = () => {
  const [product, setProduct] = useState([]);
  const productList = async () => {
    const url = "http://localhost:3000/BESTSELLERS";
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  return (
    <div>
      <div className="header">
        <p className="title">LATEST DROPS</p>
        <button>SHOP ALL</button>
      </div>
      <Carousel responsive={responsive}>
        {product.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlide;
