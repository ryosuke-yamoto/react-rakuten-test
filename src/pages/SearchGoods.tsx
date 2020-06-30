import React from 'react';
import Header from '../components/Header';
import SearchWrap from '../components/Search/SearchWrap';
import Layout from '../components/Layout';
import { Goods } from '../services/Models';

interface SearchGoodsProps {
  searchedGoods: Goods[];
}

const SearchGoods: React.FC<SearchGoodsProps> = ({ searchedGoods }) => {
  return (
    <Layout>
      <Header />
      <SearchWrap searchedGoods={searchedGoods} />
    </Layout>
    //   <Sidebar />
  );
};

export default SearchGoods;
