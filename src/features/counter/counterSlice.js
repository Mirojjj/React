import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prev: null,
  curr: 0,
  result: 0,
  operation: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add_digit: (state, action) => {
      if (state.curr == "0") {
        return {
          ...state,
          curr: action.payload,
        };
      }
      return {
        ...state,
        curr: `${state.curr}${action.payload}`,
      };
    },
    choose_operation: (state, action) => {
      if (state.curr == 0) return state;

      return {
        ...state,
        prev: state.curr,
        curr: `${state.curr}${action.payload}`,
      };
    },
    showResult: (state) => {
      return {
        ...state,
        result: eval(state.curr),
      };
    },

    clear: (state) => {
      return {
        ...state,
        curr: 0,
        result: 0,
      };
    },

    backSpace: (state) => {
      return {
        ...state,
        curr: state.curr.slice(0, -1),
      };
    },
  },
});

export const { choose_operation, add_digit, showResult, clear, backSpace } =
  counterSlice.actions;

export default counterSlice.reducer;
