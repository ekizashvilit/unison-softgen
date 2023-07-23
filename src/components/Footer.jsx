import { styled } from 'styled-components';
import FtrHero from './ftrHero';
import FtrInfo from './ftrInfo';
import FtrHelp from './ftrHelp';
import FtrSocials from './ftrSocials';

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

const Wrapper = styled.footer``;
export default Footer;
