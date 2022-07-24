import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface ISearchFieldState {
  input: string;
}

const initialState: ISearchFieldState = {
  input: ''
}

const searchFieldSlice = createSlice({
  name: 'searchField',
  initialState,
  reducers: {
    setSearchField: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    }
  }
})

export const { setSearchField } = searchFieldSlice.actions;

export const selectInput = (state: RootState) => state.searchField.input;

export default searchFieldSlice.reducer;
