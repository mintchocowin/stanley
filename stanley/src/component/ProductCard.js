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
const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <div className="image">
        <div className="p-group">
          <p className="p-left"></p>
          <p className="p-right"></p>
        </div>
        <img className="maintumblr" />
        <Carousel responsive={responsive}>
          <div>
            <img className="colortumblr" />
          </div>
        </Carousel>
      </div>
      <p className="color-name">{item?.detail}</p>
      <b className="name">{item?.name}</b>
      <br />
      <b className="detail">{item?.detail}</b>
      <p className="price">{item?.price}</p>
    </div>
  );
};

export default ProductCard;
