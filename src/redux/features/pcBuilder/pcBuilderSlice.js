import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  categoriesData: {
    cpu: null,
    motherboard: null,
    ram: null,
    powerSupply: null,
    storageDevice: null,
    monitor: null,
  },
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addProductToPcBuilder: (state, action) => {
      const product = action.payload;
      let totalAmount = state.totalAmount + product.price;
      state.totalAmount = Number(totalAmount.toFixed(2));
      state.categoriesData[product.category] = product;
    },
    removeProductToPcBuilder: (state, action) => {
      const product = state.categoriesData[action.payload];
      let totalAmount = state.totalAmount - product.price;
      state.totalAmount = Number(totalAmount.toFixed(2));

      state.categoriesData[product.category] = null;
    },
    completePcBuilder: (state) => {
      state.totalAmount=0
      state.categoriesData = {
        cpu: null,
        motherboard: null,
        ram: null,
        powerSupply: null,
        storageDevice: null,
        monitor: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToPcBuilder,
  removeProductToPcBuilder,
  completePcBuilder,
} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
