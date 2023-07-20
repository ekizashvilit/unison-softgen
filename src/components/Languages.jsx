import ge from '../assets/ge.png';
import en from '../assets/en.png';
import ru from '../assets/ru.png';
import dropdown from '../assets/icons/dropdown.svg';
import { styled } from 'styled-components';

const Languages = () => {
  return (
    <Wrapper>
      <button className="dropbtn-lg">
        <img
          src={ge}
          style={{ height: '15px', borderRadius: '3px' }}
          alt="ge-flag"
        />
        ქართული
        <img
          src={dropdown}
          style={{ height: '1rem' }}
          alt="icon"
          className="icon"
        />
      </button>
      <div className="dropdown-content-lg">
        <button>
          <img
            src={en}
            style={{ height: '15px', width: '22px' }}
            alt="en-flag"
          />
          English
        </button>
        <button>
          <img src={ru} style={{ height: '15px' }} alt="ru-flag" />
          Русский
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 150px;

  &:hover .dropdown-content-lg {
    opacity: 1;
    visibility: visible;
  }

  .dropbtn-lg {
    background: none;
    color: white;
    display: flex;
    gap: 7px;
    align-items: center;
    font-size: 16px;
    border: none;
    cursor: pointer;
    min-width: 5rem;
  }

  .dropdown-content-lg {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 183%;
    right: -3%;
    padding: 10px 0;
    background-color: #242424;
    z-index: 1;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 4rem 1rem 2rem;
    border-radius: 0px 0px 8px 8px;
    gap: 1rem;
  }

  .dropdown-content-lg button {
    color: white;
    border: none;
    text-decoration: none;
    display: flex;
    gap: 7px;
    background: none;
    font-size: 1rem;
  }

  .dropdown-content-lg button:hover {
    background-color: #006a9f;
  }

  .dropbtn-lg:hover .icon {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`;

export default Languages;
