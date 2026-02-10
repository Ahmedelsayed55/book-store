import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useFavoritesStore =  create(
    persist((set)=>({
    favoritesItems: [],
    total: 0 ,
    clearFavorites:()=> set({favoritesItems:[], total:0}),
    addToFavorites:(book)=>set((state)=>{
        let books = [...state.favoritesItems];
        const bookIndex = books.findIndex((i)=>i.id === book.id);
        if (bookIndex !== -1) {
            books[bookIndex].qty += 1;
                toast.success(
              `${book.title} Quantity Changed to :` + books[bookIndex].qty
            );
        } else {
       books.push({...book, qty:1})
         toast.success(`${book.title} added to favorites`);
        }
        return {favoritesItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}
    }),
    removeBook:(book)=>set((state)=>{
        let books = [...state.favoritesItems];
        let bookIndex = books.findIndex((i)=> i.id === book.id);
        books.splice(bookIndex, 1);
        toast.success(`${book.title} removed from favorites`);
        return {favoritesItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}
    }),
    incrementQty:(book)=> set((state)=>{
        let books = [...state.favoritesItems];
        let bookIndex = books.findIndex((i)=> i.id === book.id);
        books[bookIndex].qty += 1;
        toast.success(
          `${books[bookIndex].title} Quantity Changed to :` + books[bookIndex].qty
        );
        return {favoritesItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}
    }),
    decrementQty:(book)=> set((state)=>{
        let books = [...state.favoritesItems];
        let bookIndex = books.findIndex((i)=> i.id === book.id);
        if (books[bookIndex].qty > 1) {
            books[bookIndex].qty -= 1;
            toast.success(
              `${books[bookIndex].title} Quantity Changed to :` + books[bookIndex].qty
            );
        } else {
            books.splice(bookIndex, 1);
            toast.success(`${book.title} removed from favorites`);
        }   
        return {favoritesItems:books, total: books.reduce((sum, item) => sum + (item.price * item.qty), 0)}

    }),
    
    }),
    {
    name: "favorites-storage",
    }
)
)