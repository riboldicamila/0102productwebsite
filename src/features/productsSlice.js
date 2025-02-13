import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, get, push, set, remove } from 'firebase/database';

// Fetch all products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const db = getDatabase();
    const productsRef = ref(db, 'products');
    const snapshot = await get(productsRef);
    
    if (snapshot.exists()) {
      const products = [];
      snapshot.forEach((childSnapshot) => {
        products.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      return products;
    }
    return [];
  }
);

// Add new product
export const addNewProduct = createAsyncThunk(
  'products/addNewProduct',
  async (product) => {
    const db = getDatabase();
    const productsRef = ref(db, 'products');
    const newProductRef = push(productsRef);
    
    await set(newProductRef, {
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      createdAt: new Date().toISOString(),
    });

    return {
      id: newProductRef.key,
      ...product,
      createdAt: new Date().toISOString(),
    };
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId) => {
    const db = getDatabase();
    const productRef = ref(db, `products/${productId}`);
    await remove(productRef);
    return productId;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products cases
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add Product cases
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Delete Product cases
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;