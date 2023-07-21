import { styled } from 'styled-components';
import { useGlobalContext } from '../context';
import closeBtnWhite from '../assets/icons/close-btn-white.svg';

const SosModal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className="modal-container">
          <div className="modal-content">
            <p style={{ fontSize: '24px' }}>SOS</p>
            <div className="underline"></div>
            <p>
              მოხდა სადაზღვევო <br /> შემთხვევა
            </p>
            <div className="underline"></div>
            <p>
              შემთხვევის სტატუსის <br /> შემოწმება
            </p>
          </div>
          <button className="close-modal-btn" onClick={closeModal}>
            <img src={closeBtnWhite} alt="" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;

    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    opacity: 0;
  }

  .show-modal {
    visibility: visible;
    z-index: 10;

    opacity: 1;
  }

  .modal-container {
    background: #ee303c;
    border-radius: 12px;
    color: white;
    width: 90vw;
    height: 30vh;
    max-width: var(--fixed-width);
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
    top: -11rem;
  }

  .underline {
    width: 2.5rem;
    height: 0.1rem;
    background: white;
    margin-left: auto;
    margin-right: auto;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'FiraGo';
  }

  .modal-content p {
    margin-bottom: 0;
    font-size: 18px;
  }

  .close-modal-btn {
    border: none;
    background: none;
    position: absolute;
    top: 5px;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default SosModal;
