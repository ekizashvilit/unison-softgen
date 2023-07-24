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
      <p className="mobile-p">
        ლორემ იპსუმ <br /> დოლორ სიტ ამეტ
      </p>
      <p className="desk-p">
        ქონების დაზღვევა <span>ყველაზე ხელსაყრელი პირობებით</span>
      </p>
      <div className="img-container">
        <img src={buyNow} alt="" className="buy-now" />
        <img src="" alt="" />
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
      rgba(0, 106, 159, 0.5) 56%
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

  .mobile-p {
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

  .desk-p {
    display: none;
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

  @media (min-width: 994px) {
    .mobile-p {
      display: none;
    }

    .image-container div {
      height: 100%;
    }

    .desk-p {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      color: white;
      font-size: 27px;
      text-align: center;
      width: 100%;
      font-family: 'PantonMtav3 Regular';
      font-size: 48px;
    }

    .desk-p span {
      font-family: 'FiraGo';
      font-size: 22px;
    }

    .buy-now {
      top: 105%;
      width: 23rem;
    }
  }
`;

export default Hero;
