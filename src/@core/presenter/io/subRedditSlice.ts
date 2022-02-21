import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {RequestHeaders} from '@core/interface/request.interface';
import {apiRestGet} from '@utils/request.util';
import API from '@presenter/io/config';

export interface SliceStateReddit {
  subReddit: null;
}

const initialState: SliceStateReddit = {
  subReddit: null,
};

export const getSubReddit = async (dispatch: Dispatch) => {
  try {
    const resp = await apiRestGet<RequestHeaders, any>({
      url: `${API.baseUrlNode}/${API.endpoints.subReddit}`,
    });
    console.log('respresprespresp de slice', resp);
    return await dispatch(setSubReddit(resp.data));
  } catch (error) {
    throw new Error('Error lista de subReddit' + error);
  }
};

const subRedditSlice = createSlice({
  name: 'subReddit',
  initialState,
  reducers: {
    setSubReddit: (state, action) => {
      state.subReddit = action.payload;
    },
  },
});

export const {setSubReddit} = subRedditSlice.actions;

export default subRedditSlice.reducer;
