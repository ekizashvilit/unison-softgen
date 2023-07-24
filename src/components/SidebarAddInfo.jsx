import { styled } from 'styled-components';
import { additionalInfo } from '../utils/constants';
import { BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';
import SmallSidebar from './SmallSidebar';

const SidebarAddInfo = () => {
  const [isSmallSidebarOpen, setIsSmallSidebarOpen] = useState(false);

  const openSmallSidebar = () => {
    setIsSmallSidebarOpen(true);
    console.log('open');
  };
  const closeSmallSidebar = () => {
    setIsSmallSidebarOpen(false);
    console.log('close');
  };

  return (
    <Wrapper>
      <ul>
        {additionalInfo.map((item, index) => {
          return (
            <li key={index} onClick={index === 0 ? openSmallSidebar : null}>
              <div>
                <img src={item.icon} alt="" />
                {item.text}
              </div>
              <BsChevronRight
                style={{
                  color: '#EE303C',
                  fontSize: '17px',
                  cursor: 'pointer',
                }}
              />
            </li>
          );
        })}
      </ul>
      <aside
        className={
          isSmallSidebarOpen
            ? 'sm-sidebar show-sm-sidebar sm-sidebar-right'
            : 'no-show'
        }
      >
        <SmallSidebar closeSmallSidebar={closeSmallSidebar} />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .no-show {
    display: none;
  }

  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  li div {
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 1rem;
    font-size: 18px;
  }

  ul li:nth-child(3) {
    padding-left: 2px;
  }

  .sm-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 87%;
    height: 100%;
    background: white;
    transition: all 0.3s ease-in-out;
    transform: translateX(100%);
    z-index: -1;
    padding: 3rem 2.5rem;
    color: #707070;
    font-family: Helvetica, sans-serif;
    right: 0;
    left: auto;
  }

  .show-sm-sidebar {
    transform: translateX(0);
    z-index: 999;
  }

  @media (min-width: 994px) {
    .sm-sidebar {
      display: none;
    }
  }
`;

export default SidebarAddInfo;
