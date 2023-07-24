import { styled } from 'styled-components';
import { advantages, advantagesDesk } from '../utils/constants';

const Advantages = () => {
  return (
    <Wrapper>
      <h1>უპირატესობები</h1>
      <div className="adv-containers">
        {advantages.map((item, index) => {
          return (
            <div key={index} className="adv-container">
              <div>
                <img src={item.icon} alt="" />
                <span>{item.number}</span>
              </div>
              <h4>{item.text}</h4>
            </div>
          );
        })}
      </div>
      <div className="adv-containers-desk">
        {advantagesDesk.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.icon} alt="" />
              <span>{item.txt}</span>
            </div>
          );
        })}
      </div>
      <div className="underline-div">
        <div className="underline"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f8f8f8;
  color: #707070;
  text-align: center;
  padding: 0 2rem;

  h1 {
    font-family: 'PantonMtav3 Regular';
    font-size: 32px;
    padding: 14px 0;
  }

  .adv-containers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  .adv-containers-desk {
    display: none;
  }

  .adv-container div {
    display: flex;
    flex-direction: column;
    font-size: 26px;
    color: #006a9f;
    font-weight: bold;
    padding-bottom: 0.8rem;
  }

  .adv-container h4 {
    font-size: 13px;
  }

  .adv-containers div img {
    height: 53px;
  }

  .underline-div {
    width: 100%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .underline {
    width: 112px;
    border-bottom: 1px solid #707070;
  }

  @media (min-width: 994px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15rem;

    .adv-containers {
      display: none;
    }

    .adv-containers-desk {
      /* margin: 3rem 3rem; */
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .adv-containers-desk div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem 0;
    }

    .adv-containers-desk div:hover {
      background: white;
      cursor: pointer;
      border-radius: 12px;
    }

    .adv-containers-desk div img {
      max-height: 48px;
    }

    h1 {
      font-size: 36px;
      font-weight: normal;
    }

    .underline-div {
      display: none;
    }
  }
`;

export default Advantages;
