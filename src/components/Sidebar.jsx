import { styled } from 'styled-components';
import { useGlobalContext } from '../context';
import {
  SidebarAddInfo,
  SidebarFooter,
  SidebarInfo,
  SidebarMain,
} from './index';

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <SidebarMain />
        <SidebarAddInfo />
        <SidebarInfo />
        <SidebarFooter />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 0.3s linear;
    transform: translate(100%);
    z-index: -1;
    padding: 3rem 2.5rem;
    color: #707070;
    font-family: Helvetica, sans-serif;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media (min-width: 1124px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
