import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCheckoutStore = create(
  persist(
    (set) => ({
      checkoutItems: [],
      total: 0,
      clearCart: () => set({ checkoutItems: [], total: 0 }),
      addToCheckout: (book) =>
        set((state) => {
          let books = [...state.checkoutItems];
          const bookIndex = books.findIndex((i) => i.id === book.id);
          if (bookIndex !== -1) {
            books[bookIndex].qty += 1;
            toast.success(
              `${book.title} Quantity Changed to :` + books[bookIndex].qty,
            );
          } else {
            books.push({ ...book, qty: book.qty ? book.qty : 1 });
            toast.success(`${book.title} added to cart`);
          }
          return {
            checkoutItems: books,
            total: books.reduce((sum, item) => sum + item.price * item.qty, 0),
          };
        }),
      incrementQty: (book) =>
        set((state) => {
          let books = [...state.checkoutItems];
          let bookIndex = books.findIndex((i) => i.id === book.id);
          books[bookIndex].qty += 1;
          toast.success(
            `${books[bookIndex].title} Quantity Changed to :` +
              books[bookIndex].qty,
          );
          return {
            checkoutItems: books,
            total: books.reduce((sum, item) => sum + item.price * item.qty, 0),
          };
        }),
      decrementQty: (book) =>
        set((state) => {
          let books = [...state.checkoutItems];
          let bookIndex = books.findIndex((i) => i.id === book.id);
          if (books[bookIndex].qty > 1) {
            books[bookIndex].qty -= 1;
            toast.success(
              `${books[bookIndex].title} Quantity Changed to :` +
                books[bookIndex].qty,
            );
          } else {
            books.splice(bookIndex, 1);
            toast.success(`${book.title} removed from cart`);
          }
          return {
            checkoutItems: books,
            total: books.reduce((sum, item) => sum + item.price * item.qty, 0),
          };
        }),
    }),
    {
      name: "checkout-storage",
    },
  ),
);
