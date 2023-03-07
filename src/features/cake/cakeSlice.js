import { createSLice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10
};

const cakeSlice = createSLice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    }
  }
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
