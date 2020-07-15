export default `
query catalogItems($shopIds: [ID]!, $slugOrIds: [String]!) {
    catalogItems(shopIds: $shopIds, slugOrIds: $slugOrIds) {
      ...TagInfo
    }
}
fragment ProductInfo on CatalogItemProduct {
  product {
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
`;
