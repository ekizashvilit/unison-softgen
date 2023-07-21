import { styled } from 'styled-components';
import closeBtn from '../assets/icons/close-btn.svg';
import { smallSidebarInfo } from '../utils/constants';
import { BsChevronRight } from 'react-icons/bs';

const SmallSidebar = ({ closeSmallSidebar }) => {
  return (
    <Wrapper>
      <img src={closeBtn} className="icon" alt="" onClick={closeSmallSidebar} />
      <ul className="info">
        {smallSidebarInfo.map((item, index) => {
          return (
            <li key={index} className="info-li">
              <img src={item.icon} alt="icons" />
              <div className="info-div">
                {item.text}
                {index === 3 ? <BsChevronRight className="react-icon" /> : null}
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .icon {
    position: absolute;
    right: 10px;
    top: -1%;
  }

  .info-li {
    position: relative;
    justify-content: flex-start;
    gap: 2rem;
    font-size: 18px;
    font-weight: bold;
    align-items: flex-start;
  }

  li:nth-child(2) img,
  li:nth-child(3) img,
  li:nth-child(4) img {
    padding-top: 5px;
  }

  .info-div {
    display: flex;
  }

  .react-icon {
    color: #ee303c;
    font-size: 25px;
    cursor: pointer;
  }
`;

export default SmallSidebar;
