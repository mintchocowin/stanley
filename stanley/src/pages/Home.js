import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import mother from "../image/mothersday.png";

import CategoryCard from "../component/CategoryCard";

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

{
  /* <FontAwesomeIcon icon={faArrowRight} />
<FontAwesomeIcon icon={faArrowLeft} /> */
}

const Home = () => {
  return (
    <div>
      <div className="type">
        <div className="type-p">DISCOVER THE LATEST</div>
        <div className="type-slide">
          <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        </div>
      </div>
      <div className="coming">
        <p>COMING SOON</p>
        <p>
          THE REVERB <br />
          COLLECTION
        </p>
        <div className="video"></div>
        <p>
          These bold,retro graphics will keep the good vibes going.
          <b>Drops 4/30 at 12PM (ET)</b>
        </p>
        <button>GET NOTIFIED</button>
        <u>The Reverb Collection</u>
      </div>
      <div className="category">
        <div className="popular"></div>
        <div className="recomendation">
          <CategoryCard/>
          <CategoryCard/>
        </div>
      </div>
      <div className="season">
        <div className="mother">
          <img src={mother} />
        </div>
        <div className="season-p">
          <b>NOW IN BLOOM</b>
          <b>
            MOTHER"S DAY
            <br /> COLLECTION
          </b>
          <b>
            Surprise the moms in your life with <br />
            flowers that last and last
          </b>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
