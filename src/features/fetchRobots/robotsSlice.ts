import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface IUsers {
  id: number | undefined;
  name: string;
  email: string;
};

interface IRobotState {
  users: IUsers[];
  status: 'idle' | 'loading' | 'success';
};

const initialState: IRobotState = {
  users: [],
  status: 'idle'
};

export const fetchRobots = createAsyncThunk(
  'robots/fetchRobots',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }
);

const robotsSlice = createSlice({
  name: 'robots',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRobots.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRobots.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = action.payload;
      })
  }
});

export const selectUsers = (state: RootState) => state.robots.users;
export const selectStatus = (state: RootState) => state.robots.status;

export default robotsSlice.reducer;