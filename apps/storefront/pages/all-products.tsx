import React from 'react';
import TagPage from './collections/[tag]';

export function getServerSideProps() {
  return { props: { products: [] } };
}

export default function AllProducts({ products }) {
  return <TagPage productCard={products} />;
}
