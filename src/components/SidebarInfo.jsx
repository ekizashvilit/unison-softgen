import { styled } from 'styled-components';
import telephone from '../assets/icons/telephone.svg';

const SidebarInfo = () => {
  return (
    <Wrapper>
      <button className="agent-btn">
        <img src={telephone} alt="" />
        <div>
          აგენტთან <br /> დაკავშირება
        </div>
      </button>
      <div className="main-div">
        <div>ჩვენს შესახებ</div>
        <div>სიახლეები</div>
        <div>პარტნიორები</div>
        <div>კონტაქტი</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .agent-btn {
    width: 100%;
    border-radius: 12px;
    border: none;
    background: none;
    background-color: #ee303c;
    color: white;
    display: flex;
    justify-content: center;
    padding: 1rem;
    font-size: 14px;
    text-align: left;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
  }

  .main-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 20px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default SidebarInfo;
