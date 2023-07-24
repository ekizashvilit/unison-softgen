import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../assets/logo-mob.svg';
import deskLogo from '../assets/logo-desk.svg';
import toggleBtn from '../assets/icons/toggle-btn.svg';
import { useGlobalContext } from '../context';
import personDesk from '../assets/icons/person-desk.png';
import DesktopNav from './DesktopNav';

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();

  document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="" className="mob-logo" />
            <img src={deskLogo} alt="" className="desk-logo" />
          </Link>
          <DesktopNav />
          <button className="nav-toggle" onClick={openSidebar}>
            <img src={toggleBtn} alt="" />
          </button>
        </div>
        <div className="nav-profile">
          <img src={personDesk} alt="" />
          <span>
            ჩემი <br /> კაბინეტი
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  overflow-y: hidden;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 79%, #006a9f4d 100%);

  .nav-center {
    width: 85vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      height: 2.5rem;
    }

    button {
      position: absolute;
      right: 0%;
    }
  }

  .nav-profile {
    display: none;
  }

  .nav-profile img {
    height: 62px;
  }

  .desk-nav-items {
    display: none;
  }

  .desk-logo {
    display: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;

    img {
      height: 1.6rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 994px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      height: 100%;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }

      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }

  @media (min-width: 994px) {
    background: #006a9f;
    padding-top: 0;

    .mob-logo {
      display: none;
    }

    .desk-logo {
      display: block;
    }

    .nav-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .nav-center {
      display: flex;
      justify-content: space-between;
      color: white;
    }

    .nav-header {
      gap: 3rem;
      height: 100%;
    }

    .desk-nav-items {
      display: flex;
      gap: 3rem;
      max-width: min-content;
      height: 100%;
      align-items: center;
      position: relative;
    }

    .desk-nav-items div {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .desk-nav-items div:hover {
      border-top: 3px solid #de2910;
    }
  }

  @media (min-width: 994px) and (max-width: 1134px) {
    .nav-header {
      gap: 2rem;
    }

    .desk-nav-items {
      gap: 2rem;
    }
  }
`;

export default Navbar;
