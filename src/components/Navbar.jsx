import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../assets/logo-mob.svg';
import toggleBtn from '../assets/icons/toggle-btn.svg';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button className="nav-toggle" onClick={openSidebar}>
            <img src={toggleBtn} alt="" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
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

  @media (min-width: 1124px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
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
`;

export default Navbar;
