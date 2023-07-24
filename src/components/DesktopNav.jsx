import blueCross from '../assets/icons/blue-cross.svg';
import blueCar from '../assets/icons/blue-car.svg';
import blueAirplane from '../assets/icons/blue-airplane.svg';
import deskBluePerson from '../assets/icons/desk-blue-person.svg';
import { styled } from 'styled-components';

const DesktopNav = () => {
  return (
    <Wrapper>
      <div className="desk-nav-items">
        <div className="dropdown">
          <span>ფიზიკური პირებისთვის</span>
          {/* <div className="dropdown-content">
            <div>
              <img src={blueCross} alt="" />
              <span>ინდივიდუალური ჯანმრთელობის დაზღვევა</span>
            </div>
            <div>
              <img src={blueCar} alt="" />
              <span>ავტოდაზღვევა - პაკეტები</span>
            </div>
            <div>
              <img src={deskBluePerson} alt="" />
              <span>მძღოლის პასუხისმგებლობის დაზღვევა</span>
            </div>
            <div>
              <img src={blueAirplane} alt="" />
              <span>სამოგზაურო დაზღვევა</span>
            </div>
          </div> */}
        </div>

        <div>იურიდიული პირებისთვის</div>
        <div>სავალდებულო დაზღვევა</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;

  .desk-nav-items div {
    cursor: pointer;
  }

  @media (min-width: 994px) {
    .dropdown-content {
      display: none !important;
    }
  }
`;

export default DesktopNav;
