import { styled } from 'styled-components';
import bgPhoto from '../assets/bg-photo.png';
import buyNow from '../assets/buy-now-mob.png';

const Hero = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={bgPhoto} alt="" />
      </div>
      <p>
        ლორემ იპსუმ <br /> დოლორ სიტ ამეტ
      </p>
      <div className="img-container">
        <img src={buyNow} alt="" className="buy-now" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .image-container img {
    width: 100%;
    min-height: 266px;
    object-fit: cover;
  }

  .img-container {
    width: 100%;
    height: 68px;
    position: absolute;
    top: 73%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 2%,
      rgba(0, 106, 159, 0.3) 56%
    );
    z-index: 0;
    border-bottom: 3px solid #ee303c;
  }

  .buy-now {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
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
`;

export default Hero;
