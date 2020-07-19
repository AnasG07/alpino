import graphQLRequest from '../graphQLRequest';
import fetchPrimaryShop from '../shop/fetchPrimaryShop';
import allProduct from './allProducts.js';

export default async function fetchAllProduct() {
  const { shop } = await fetchPrimaryShop('en');
  const data = await graphQLRequest(allProduct, { shopIds: [shop && shop._id] });

  return data && { data };
}
