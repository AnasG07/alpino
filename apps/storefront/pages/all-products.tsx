import React from 'react';
import TagPage from './collections/[tag]';
import { getAllProducts } from '../data/functions';
import fetchAllProduct from '../staticUtils/allProducts/fetchAllProducts.js';

export async function getServerSideProps() {
  const {
    data: {
      catalogItems: { nodes },
    },
  } = await fetchAllProduct();

  return { props: { products: getAllProducts(), allData: nodes } };
}

export default function AllProducts({ products, allData }) {
  return <TagPage data={allData} />;
}
