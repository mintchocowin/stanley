import react from "react";
import "./Header.css";
import styled from "styled-components";
import main1 from "../image/Main1.webp";

const Image = styled.img`
  width: 100%;
  height: 720px;
  position: absolute;
  z-index: 1;
`;
const Text = styled.div`
  position: absolute;
  z-index: 2;
`;
const Header = () => {
  return (
    <div className="Header">
      <Image src={main1} />
      <Text>
        <p>NEW ARRIVAL</p>
        <h1>
          EASY_CARRY
          <br />
          ICEFLOW
        </h1>
        <p>Check out the lightweight IceFlow Bottle with Flip Straw Lid.</p>
      </Text>
      <button>SHOP NOWww</button>
    </div>
  );
};

export default Header;
