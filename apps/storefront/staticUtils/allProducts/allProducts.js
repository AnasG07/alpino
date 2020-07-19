export default `query items($shopIds: [ID]!){
  catalogItems(shopIds: $shopIds){
    nodes{
      ... on CatalogItemProduct{
        product{
           title
           primaryImage{
             URLs{
               medium
             }
           }

           title,
           pageTitle,
           pricing{
             maxPrice
             displayPrice
           }
           slug,
           description,
         }
      }
    }
  }
}`;
