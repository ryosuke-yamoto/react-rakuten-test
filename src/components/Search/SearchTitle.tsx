import React from 'react';
import '../Goods/GoodsTitle.css';
import { useParams } from 'react-router-dom';

type Param = {
  keyword: string;
};

const SearchTitle = () => {
  const params: Param = useParams();

  return (
    <div className="title-wrap">
      <h1 className="main-title">{`「${params.keyword}」の検索結果`}</h1>
      {/* <p className="category-caption">{categoryCaption}</p> */}
    </div>
  );
};

export default SearchTitle;
