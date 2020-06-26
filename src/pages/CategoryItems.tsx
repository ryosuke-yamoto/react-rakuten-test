import React from 'react';
import Header from '../components/Header';
import GoodsWrap from '../components/Goods/GoodsWrap';
import Layout from '../components/Layout';

const CategoryItems = () => {
  return (
    <Layout>
      <Header />
      <GoodsWrap />
    </Layout>
    //   <Sidebar />
  );
};

export default CategoryItems;
