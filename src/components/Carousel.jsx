import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { sliderItems } from '../utils/constants';
import { styled } from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Carousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 994) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <Wrapper>
      <h2>სიახლეები</h2>
      <Slider {...settings}>
        {sliderItems.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={item.img} alt={item.title} className="card-image" />
              <div className="card-txt">
                <h3 className="card-title">{item.title}</h3>
                <span className="card-date">{item.date}</span>
              </div>
            </div>
          );
        })}
      </Slider>
      <p>
        ყველა სიახლე
        <BsChevronRight />
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  background: #f8f8f8;
  color: #707070;

  h2 {
    text-align: center;
    font-family: 'PantonMtav3 Regular';
    padding-bottom: 1rem;
    padding-top: 3rem;
  }

  .slick-dots {
    bottom: -40px;
  }

  .card {
    box-shadow: 0 0 16pt #006a9f1a;
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 555px;
    margin: 0 2rem;
    cursor: pointer;
  }

  .card-txt {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .card-txt h3 {
    font-size: 14px;
    line-height: 1.5rem;
  }

  .card-txt span {
    color: #d0d0d0;
    font-size: 12px;
  }

  .card img {
    border-top-left-radius: 12px;
    width: 100%;
  }

  .slick-slide div {
    display: flex;
    justify-content: center;
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    margin-top: 4rem;
    cursor: pointer;
  }

  @media (min-width: 994px) {
    h2 {
      font-weight: normal;
    }

    .card {
      min-height: 331px;
    }

    .card:hover {
      border: 2px solid #006a9f;
    }
  }
`;
export default Carousel;
