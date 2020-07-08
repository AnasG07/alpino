import React from 'react';
import PropTypes from 'prop-types';
import { RoutingProvider } from './RoutingContext';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { ShopProvider } from './ShopContext';
import { TagsProvider } from './TagsContext';

export const ContextProviders = ({ children, pageProps }) => {
  const { tags, shop, lang, translations, namespaces } = pageProps;

  return (
    <RoutingProvider>
      <AuthProvider>
        <CartProvider>
          <ShopProvider shop={shop}>
            <TagsProvider tags={tags}>{children}</TagsProvider>
          </ShopProvider>
        </CartProvider>
      </AuthProvider>
    </RoutingProvider>
  );
};

ContextProviders.propTypes = {
  children: PropTypes.node,
  pageProps: PropTypes.object,
};
