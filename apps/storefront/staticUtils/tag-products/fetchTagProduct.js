import graphQLRequest from '../graphQLRequest';
import fetchPrimaryShop from '../shop/fetchPrimaryShop';
import catalogItems from './tagProduct.js';

/**
 * Fetch a tag by its slug or id
 *
 * @param {String} slugOrId  - the tag's slug or id
 * @param {String} lang - The shop's language
 * @returns {Object} The fetched tag object
 */
export default async function fetchTagProduct(slugOrId, lang) {
  const { shop } = await fetchPrimaryShop(lang);
  const data = await graphQLRequest(catalogItems, { shopIds: [shop?._id], tagIds: [slugOrId] });
  return data && { data: data };
}
