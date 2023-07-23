import { styled } from 'styled-components';
import { advantages } from '../utils/constants';

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
`;

export default Advantages;
