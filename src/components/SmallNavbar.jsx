import { styled } from 'styled-components';
import { links } from '../utils/constants';
import phone from '../assets/icons/phone.svg';
import Languages from './Languages';

const SmallNavbar = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="pages">
          <ul className="nav-links">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <button>{link.text}</button>
                </li>
              );
            })}
          </ul>
          <div className="dropdown">
            <button className="dropbtn">SOS</button>
            <div className="dropdown-content">
              <a href="">მოხდა სადაზღვევო შემთხვევა</a>
              <a href="">შემთხვევის სტატუსის შემოწმება</a>
            </div>
          </div>
        </div>
        <div className="settings">
          <Languages />
          <div className="number-info">
            ცხელი ხაზი
            <div className="number">
              <img src={phone} alt="" />2 991 991
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;
  background-color: #242424;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
    max-width: var(--max-width);
    color: white;
  }

  .pages {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .nav-links {
    display: flex;
    gap: 1rem;

    li button {
      background: none;
      border: none;
      color: #d0d0d0;
      font-size: 15px;
      cursor: pointer;
    }
    li button:hover {
      color: #006a9f;
    }
  }

  .settings {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .number-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #d0d0d0;
    height: 100%;
    border-bottom: 3px solid #ee303c;
  }

  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  /* dropdown */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropbtn {
    background-color: #ee303c;
    color: white;
    width: 6rem;
    height: 2.5rem;
    border-radius: 8px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown-content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: -140px;
    top: 34px;
    background-color: #ee303c;
    min-width: 370px;
    z-index: 1;
    padding: 0.5rem 0;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 1124px) {
    display: flex;
    min-height: 3.5rem;
  }
`;

export default SmallNavbar;
