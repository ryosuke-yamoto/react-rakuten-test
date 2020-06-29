import React from 'react';
import Header from '../components/Header';
import GoodsWrap from '../components/Goods/GoodsWrap';
import Layout from '../components/Layout';
import { Goods } from '../services/Models';

interface CategoryItemsProps {
  goods: Goods[];
}

const CategoryItems: React.FC<CategoryItemsProps> = ({ goods }) => {
  return (
    <Layout>
      <Header />
      <GoodsWrap goods={goods} />
    </Layout>
    //   <Sidebar />
  );
};

export default CategoryItems;
