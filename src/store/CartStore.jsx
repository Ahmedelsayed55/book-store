import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCartStore =  create(
    persist((set)=>({
    cartItems: [],
    total: 0 ,
    clearCart:()=> set({cartItems:[], total:0}),
    addToCart:(book)=>set((state)=>{
        let books = [...state.cartItems];
        const bookIndex = books.findIndex((i)=>i.id === book.id);
        if (bookIndex !== -1) {
            books[bookIndex].qty += 1;
                toast.success(
              `${book.name} Quantity Changed to :` + books[bookIndex].qty
            );
        } else {
       books.push({...book, qty:1})
         toast.success(`${book.name} added to cart`);
        }
        return {cartItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}
    }),
    removeBook:(bookId)=>set((state)=>{
        let books = [...state.cartItems];
        let bookIndex = books.findIndex((i)=> i.id === bookId.id);
        books.splice(bookIndex, 1);
        toast.success(`${bookId.name} removed from cart`);
        return {cartItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}
    }),
    incrementQty:(bookId)=> set((state)=>{
        let books = [...state.cartItems];
        let bookIndex = books.findIndex((i)=> i.id === bookId);
        books[bookIndex].qty += 1;
        toast.success(
          `${books[bookIndex].name} Quantity Changed to :` + books[bookIndex].qty
        );
        return {cartItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}
    }),
    decrementQty:(bookId)=> set((state)=>{
        let books = [...state.cartItems];
        let bookIndex = books.findIndex((i)=> i.id === bookId);
        if (books[bookIndex].qty > 1) {
            books[bookIndex].qty -= 1;
            toast.success(
              `${books[bookIndex].name} Quantity Changed to :` + books[bookIndex].qty
            );
        } else {
            books.splice(bookIndex, 1);
            toast.success(`${bookId.name} removed from cart`);
        }   
        return {cartItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}

    }),
    
    }),
    {
    name: "cart-storage",
    }
)
)