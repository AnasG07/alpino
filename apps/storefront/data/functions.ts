import { shuffle } from 'lodash';

import data from './data.json';

export default function dataFetch(slug) {
  const selectedProduct = data.find((i) => i.slug === slug);
  return selectedProduct;
}

function formatProductForCategory(product) {
  return {
    slug: product.slug,
    image: product.images.mainImage,
    name: product.name,
    type: product.type,
    price: product.cost,
    description: product.mainDescription,
    buttonText: 'Buy',
  };
}

export function getProductsByTag(tag) {
  const products = data.filter((item) => item.tags.includes(tag));
  return products.map(formatProductForCategory);
}

export function getSimilarProducts(tag, slug) {
  const products = data.filter((item) => item.tags?.includes(tag) && item.slug !== slug);
  return shuffle(products).slice(0, 3).map(formatProductForCategory);
}

export function getAllProducts() {
  return data.map(formatProductForCategory);
}
