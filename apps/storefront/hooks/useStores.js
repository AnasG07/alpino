import useUIStore from './globalStores/useUIStore';
import useAuthStore from './globalStores/useAuthStore';
import useCartStore from './globalStores/useCartStore';
import useRoutingStore from './globalStores/useRoutingStore';

/**
 * Get the UI stores
 *
 * @returns {Object} the UI stores
 */
export default function useStores() {
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  const routingStore = useRoutingStore();
  const uiStore = useUIStore();

  return { uiStore, routingStore, authStore, cartStore };
}
