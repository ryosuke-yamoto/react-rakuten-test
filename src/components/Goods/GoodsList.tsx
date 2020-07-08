import React from 'react';
import './GoodsList.css';
import { Goods } from '../../services/Models';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img from '../../img/no-image-copy.png';
import { listImgMaxNum } from '../config';

interface GoodsListProps {
  itemName: string;
  src: any;
  caption: string;
  price: number;
  url: string;
}

const SampleNextArrow: any = (props: any) => {
  console.log(props);
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ff9933' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  console.log(props);
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#ff9933' }}
      onClick={onClick}
    />
  );
};

const GoodsList: React.FC<GoodsListProps> = ({
  itemName,
  caption,
  src,
  price,
  url,
}) => {
  const makeCarouselSrc = () => {
    let src2 = src;
    if (!src[1] && !src[2]) {
      src2 = [...src, { imageUrl: img }, { imageUrl: img }];
    } else if (!src[1] || !src[2]) {
      src2 = [...src, { imageUrl: img }];
    }
    return src2;
  };
  const src2 = makeCarouselSrc();
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={src2[i].imageUrl} />
        </a>
      );
    },
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  let imgs = [];
  for (let i = 0; i < listImgMaxNum; i++) {
    imgs.push(
      <div key={i}>
        <img src={src2[i].imageUrl} className="goods-img" />
      </div>
    );
    // return [...imgs];
  }
  console.log(imgs);
  return (
    <div className="goods-wrap">
      <Slider {...settings} className="goods-img-wrap">
        {imgs}
        {/* {() => {
          let imgs = [];
          for (let i = 0; i < listImgMaxNum; i++) {
            imgs.push(
              <div>
                <img src={src2[i].imageUrl} className="goods-img" />
              </div>
            );
            return [...imgs];
          }
        }}
        () */}
        {/* <div>
          <img src={src2[0].imageUrl} className="goods-img" />
        </div>
        <div>
          <img src={src2[1].imageUrl} className="goods-img" />
        </div>
        <div>
          <img src={src2[2].imageUrl} className="goods-img" />
        </div> */}
      </Slider>
      <div className="goods-text-wrap">
        <a href={url} className="goods-title">
          {itemName}
        </a>
        <p className="goods-caption">{caption}</p>
        <p className="goods-price">（値段）{price}円</p>
      </div>
    </div>
  );
};

export default GoodsList;
