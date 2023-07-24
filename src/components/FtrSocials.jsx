import { styled } from 'styled-components';
import { footerSocials } from '../utils/constants';
import googlePlay from '../assets/google-play.png';
import appStore from '../assets/app-store.svg';

const FtrSocials = () => {
  return (
    <Wrapper>
      <div className="download">
        <img src={appStore} alt="" />
        <img src={googlePlay} alt="" />
      </div>
      <h5>სოციალური ქსელები</h5>
      <div className="socials">
        {footerSocials.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1rem;

  .download {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  .download img {
    cursor: pointer;
  }

  .socials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }

  .socials div {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  h5 {
    display: none;
  }

  @media (min-width: 994px) {
    .download {
      display: none;
    }

    .socials {
      display: flex;
      flex-direction: column;
    }

    h5 {
      display: block;
    }
  }
`;

export default FtrSocials;
