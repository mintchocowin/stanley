import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCard.css";
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
const ProductCard = () => {
  return (
    <div className="productCard">
      <div className="image">
        <p>New</p>
        <img />
        <Carousel responsive={responsive}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>
      <p>7 Colors</p>
      <b className="name">The All Day Madeleine Midi Cooler</b>
      <br />
      <b className="detail">Backpack | 20 Can | 14.8QT | 14.O L</b>
      <p className="price">$170.00</p>
    </div>
  );
};

export default ProductCard;
