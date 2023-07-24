import { styled } from 'styled-components';

const FtrInfo = () => {
  return (
    <Wrapper>
      <h3>ინფორმაცია</h3>
      <div className="info-container">
        <div>სიახლეები</div>
        <div>ხელშეკრულებები</div>
        <div>საინფორმაციო ფურცელი</div>
        <div>სამედიცინო პროვაიდერები</div>
      </div>
      <p>უნისონი © ყველა უფლება დაცულია, 2021</p>
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

  p {
    display: none;
  }

  @media (min-width: 994px) {
    .info-container {
      display: flex;
      flex-direction: column;
    }

    p {
      display: block !important;
      margin-top: 2rem;
    }
  }
`;

export default FtrInfo;
