
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';

export const useCategoryStore = create(
    devtools(
        immer(
            (set) => ({
                categories: [],
                getcategories: () => {
                    axios.get('https://fakestoreapi.com/products/categories')
                        .then((response) => {
                            set((state) => {
                                state.categories = response.data;
                            });
                        })
                        .catch((error) => {
                            console.error('Error fetching categories:', error);
                        });
                },
            })
        )
    ));



export const useCartStore = create(
    devtools(
        persist(    
        immer(
            (set) => ({
              cart: [],
              addToCart: (product) => {
                set((state) => {
                  const idx = state.cart.findIndex((item) => item.id === product.id);
                  if (idx !== -1) {
                    state.cart[idx].quantity++;
                  } else {
                    state.cart.push({ ...product, quantity: 1 });
                  }
                });
              },
              removeEventListener: (productId) => {
                set((state) => {
                  const idx = state.cart.findIndex((item) => item.id === productId);
                  if (idx !== -1 && state.cart[idx].quantity > 1) {
                    state.cart[idx].quantity--;
                  }
                });  
              },
              deleteFromCart: (productId) => {
                set((state) => {
                  state.cart = state.cart.filter((item) => item.id !== productId);
                });
              }
            })
        )
), {
    name: 'cart-storage', 
})
);