import graphQLRequest from '../graphQLRequest';
import fetchPrimaryShop from '../shop/fetchPrimaryShop';
import catalogItem from './tagProduct.js';

/**
 * Fetch a tag by its slug or id
 *
 * @param {String} slugOrId  - the tag's slug or id
 * @param {String} lang - The shop's language
 * @returns {Object} The fetched tag object
 */
export default async function fetchTagProduct(slugOrId, lang) {
  const { shop } = await fetchPrimaryShop(lang);
  const data = await graphQLRequest(catalogItem, { shopId: shop && shop._id, slugOrId });

  return data && { data: data };
}
