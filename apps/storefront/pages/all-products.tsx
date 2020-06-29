import React from 'react';
import TagPage from './collections/[tag]';
import { getAllProducts } from '../data/functions';

export function getServerSideProps() {
  return { props: { products: getAllProducts() } };
}

export default function AllProducts({ products }) {
  return <TagPage tag="all-products" productCard={products} />;
}
