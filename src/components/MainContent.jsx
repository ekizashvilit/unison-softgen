import { styled } from 'styled-components';
import heroBg from '../assets/hero-bg.png';
import { mainContent } from '../utils/constants';

const MainContent = () => {
  return (
    <Wrapper>
      <div className="content">
        {mainContent.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.icon} alt={item.text} />
              {item.text}
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button className="btn">SOS</button>
        <div className="underline"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 30rem;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .content {
    position: absolute;
    width: 100%;
    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    padding: 0 27px;
    justify-items: center;
    align-items: center;
  }

  .content div {
    background: white;
    box-shadow: 0 0 16pt #006a9f1a;
    border-radius: 12px;
    min-height: 113px;
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 7px;
    font-size: 13px;
    color: #707070;
    padding: 0 1rem;
    cursor: pointer;
  }

  .btn-container {
    padding: 0 27px 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .btn-container button {
    background: none;
    background-color: #ee303c;
    color: white;
    border-radius: 12px;
    font-size: 22px;
    width: 21rem;
    height: 4.5rem;
  }

  .underline {
    width: 7rem;
    border-bottom: 1px solid #707070;
    margin-top: 2rem;
  }

  @media (min-width: 994px) {
    background-image: none;
    background-color: #f8f8f8;
    min-height: 12rem;

    .content {
      display: flex;
      top: 18%;
      font-family: 'PantonMtav3 Regular';
      height: 180px;
      justify-content: center;
    }

    .content div:last-child {
      display: none;
    }

    .content div {
      height: 100%;
      max-width: 260px;
      font-size: 1.5rem;
    }

    .content div img {
      height: 40px;
    }

    .btn-container {
      display: none;
    }

    .content div:hover {
      color: #006a9f;
    }
  }

  @media (min-width: 994px) and (max-width: 1500px) {
    .content {
      height: 113px !important;
      width: 100% !important;
    }

    .content div {
      font-size: 1rem;
    }
  }
`;

export default MainContent;
