import { styled } from 'styled-components';
import bgPhoto from '../assets/bg-photo.png';
import buyNow from '../assets/buy-now-mob.png';
import { BiCircle, BiSolidCircle } from 'react-icons/bi';

const Hero = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={bgPhoto} alt="" />
        <div></div>
      </div>
      <p>
        ლორემ იპსუმ <br /> დოლორ სიტ ამეტ
      </p>
      <div className="img-container">
        <img src={buyNow} alt="" className="buy-now" />
      </div>
      <div className="circle-divs">
        <BiSolidCircle />
        <BiCircle />
        <BiCircle />
        <BiCircle />
        <BiCircle />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .image-container {
    position: relative;
  }

  .image-container div {
    position: absolute;
    bottom: 7px;
    left: 0;
    width: 100%;
    height: 26%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 2%,
      rgba(0, 106, 159, 0.3) 56%
    );
  }

  .image-container img {
    width: 100%;
    min-height: 266px;
    object-fit: cover;
    border-bottom: 3px solid #ee303c;
  }

  .img-container {
    width: 100%;
    height: 68px;
    position: absolute;
    top: 73%;

    z-index: 0;
  }

  .buy-now {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: pointer;
  }

  p {
    position: absolute;
    top: 29%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    font-size: 27px;
    text-align: center;
    width: 100%;
    font-family: 'PantonMtav3 Regular';
  }

  .circle-divs {
    display: flex;
    gap: 3px;
    color: white;
    position: absolute;
    top: 80%;
    left: 83%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    cursor: pointer;
  }
`;

export default Hero;
