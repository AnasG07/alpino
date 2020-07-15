export default `
query catalogItems($shopIds: [ID]!, $tagIds: [ID]!) {
    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {
      nodes{
        ... on CatalogItemProduct{
          product {
            slug
            description
            pageTitle
        title
        pricing {
          displayPrice
        }
        primaryImage{
          URLs{
            medium
          }
        }
      }
        }
      }

    }
}
`;
