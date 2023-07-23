import { styled } from 'styled-components';
import logo from '../assets/full-logo-mob.svg';

const FtrHero = () => {
  return (
    <Wrapper>
      <img src={logo} alt="" />
      <div className="container">
        <div>ჩვენს შესახებ</div>
        <div>კარიერა</div>
        <div>კარიერა</div>
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
`;

export default FtrHero;
