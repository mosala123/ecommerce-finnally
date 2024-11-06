// Slice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create Thunk to fetch products
export const fetchproducts = createAsyncThunk("Slice/fetchproducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");  
    const data = await res.json();
    return data;
});

// Create Thunk to update a product
export const updateProduct = createAsyncThunk("Slice/updateProduct", async (product) => {
    const res = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
});

const initialState = {
    products: [],
    cart: []
};

// Create Slice
export const Slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload); // Add product to cart
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload); // Delete product by ID
        },
        updateProductInState: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload; // Update the product in the state
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchproducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(product => product.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = action.payload; // Update the product in the state
                }
            });
    },
});

// Export actions
export const { addToCart, deleteProduct, updateProductInState } = Slice.actions;

export default Slice.reducer;
