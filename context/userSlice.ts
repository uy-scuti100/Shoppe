// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { RootState } from "./store"; // Import your RootState type
// import { User } from "@/types/type";

// const initialState: User | null = null;

// const userSlice = createSlice({
//    name: "user",
//    initialState,
//    reducers: {
//       setUser: (state, action: PayloadAction<User | null>) => action.payload,
//       updateUserInfo: (state, action: PayloadAction<Partial<User>>) => {
//          if (state) {
//             return { ...state, ...action.payload };
//          }
//          return state;
//       },
//       clearUser: () => null,
//    },
// });

// export const { setUser, updateUserInfo, clearUser } = userSlice.actions;

// export const selectUser = (state: RootState) => state.user;

// export default userSlice.reducer;
