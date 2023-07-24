import { styled } from 'styled-components';
import FtrHero from './FtrHero';
import FtrInfo from './FtrInfo';
import FtrHelp from './FtrHelp';
import FtrSocials from './FtrSocials';

const Footer = () => {
  return (
    <Wrapper>
      <FtrHero />
      <FtrInfo />
      <FtrHelp />
      <FtrSocials />
      <p>უნისონი © ყველა უფლება დაცულია, 2021</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem;
  font-family: Helvetica, sans-serif;
  color: #707070;
  font-size: 1rem;
  overflow: hidden;
  position: relative;

  p {
    font-size: 14px;
  }

  @media (min-width: 994px) {
    display: flex;
    justify-content: space-around;

    p {
      display: none;
    }
  }
`;
export default Footer;
