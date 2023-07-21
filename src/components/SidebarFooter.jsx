import { styled } from 'styled-components';
import redTelephone from '../assets/icons/red-telephone.svg';

const SidebarFooter = () => {
  return (
    <Wrapper>
      <div className="language-div">
        <div style={{ color: '#EE303C' }}>ქართული</div>
        <div>English</div>
        <div>Русский</div>
      </div>
      <div className="num-div">
        ცხელი ხაზი
        <br />
        <div className="num-wrapper">
          <img src={redTelephone} alt="" />
          <span>2 991 991</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  .language-div {
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .num-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .num-wrapper {
    font-size: 26px;
    display: flex;
    gap: 1rem;
    font-weight: bold;
    color: #ee303c;
  }
`;

export default SidebarFooter;
