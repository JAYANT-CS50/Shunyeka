const { createSlice } =  require("@reduxjs/toolkit")

const userSlice = createSlice({

  name: "user",
  initialState: [], 
  reducers: {
    add(state, action) {
      const updatedUserList = action.payload;
      return updatedUserList;
    },
    remove(state, action){
      const updatedUserList = action.payload;
      return updatedUserList;
    }

  }

});

export const { add, remove } = userSlice.actions;
export const userReducer =  userSlice.reducer;