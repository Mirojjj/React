import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const fakeApiToAddUser = async (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.ceil(Math.random() * (100 - 1) + 1);
      console.log(num);
      if (num % 2 === 0) {
        resolve(user);
      } else {
        reject(new Error("You ran out of your luck!"));
      }
    }, 2000);
  });
};

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const response = await fakeApiToAddUser(user);
  return response;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add_user: (state, action) => {
      const userWithId = { ...action.payload, id: uuidv4() };
      state.users.push(userWithId);
      console.log(state.users);
    },
    delete_user: (state, action) => {
      const userId = action.payload;
      const newUsers = state.users.filter((user) => user.id !== userId);
      state.users = newUsers;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state, action) => {
      state.loading = true;
      state.users.push(action.meta.arg);
      state.error = null;
    });

    builder.addCase(addUser.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;

      state.users = state.users.filter(
        (user) => user.id !== action.meta.arg.id
      );
      console.log(state.users);
    });
  },
});

export const { add_user, delete_user } = userSlice.actions;

export default userSlice.reducer;
