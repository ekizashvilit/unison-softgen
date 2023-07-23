import { styled } from 'styled-components';

const FtrHelp = () => {
  return (
    <Wrapper>
      <h3>დახმარება</h3>
      <div className="info-container">
        <div>კონტაქტი</div>
        <div>მონაცემთა დაცვა</div>
        <div>მომხმარებლის ხმა</div>
        <div>ხშირად დასმული კითხვები</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 16px;
  }

  .info-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    cursor: pointer;
  }

  .info-container div {
    line-height: normal;
  }
`;

export default FtrHelp;
