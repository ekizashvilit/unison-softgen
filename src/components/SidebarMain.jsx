import { styled } from 'styled-components';
import logo from '../assets/sidebar-logo.svg';
import closeBtn from '../assets/icons/close-btn.svg';
import { BsPerson } from 'react-icons/bs';
import { useGlobalContext } from '../context';
import SosModal from './SosModal';

const SidebarMain = () => {
  const { openModal, isModalOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div className="wrapper-div">
        <div className="icons">
          <img src={logo} alt="unison logo" />
          <img src={closeBtn} alt="" onClick={closeSidebar} />
        </div>
        <div className="hero">
          <div className="my-cab">
            <div className="icon-container">
              <BsPerson style={{ color: 'white', fontSize: '2rem' }} />
            </div>
            ჩემი
            <br />
            კაბინეტი
          </div>
          <button className="btn" onClick={openModal}>
            SOS
          </button>
        </div>
        <SosModal />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrapper-div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .icons {
    display: flex;
    justify-content: space-between;
  }

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  }

  .icon-container {
    background: #006a9f;
    height: 3.8rem;
    width: 3.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-cab {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .btn {
    height: 3.8rem;
    width: 3.8rem;
    background: #ee303c;
    font-family: 'FiraGO';
    color: white;
    border-radius: 12px;
    font-size: 1rem;
    letter-spacing: normal;
  }
`;

export default SidebarMain;
