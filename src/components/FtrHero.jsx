import { styled } from 'styled-components';
import logo from '../assets/full-logo-mob.svg';
import googlePlay from '../assets/google-play.png';
import appStore from '../assets/app-store.svg';

const FtrHero = () => {
  return (
    <Wrapper>
      <img src={logo} alt="" />
      <div className="container">
        <div>ჩვენს შესახებ</div>
        <div>კარიერა</div>
        <div>პარტნიორები</div>
      </div>
      <div className="download">
        <img src={appStore} alt="" />
        <img src={googlePlay} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1rem;

  img {
    margin-bottom: 1rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    cursor: pointer;
  }

  .download {
    display: none;
  }

  @media (min-width: 994px) {
    .container {
      display: flex;
      flex-direction: column;
    }

    .download {
      display: flex;
      margin-top: 1rem;
    }
  }
`;

export default FtrHero;
