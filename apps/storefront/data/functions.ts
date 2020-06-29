import React from 'react';

import data from './data.json';

export default function dataFetch(slug) {
  const selectedProduct = data.find((i) => i.slug === slug);
  return selectedProduct;
}
