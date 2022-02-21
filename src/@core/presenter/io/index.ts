import {configureStore} from '@reduxjs/toolkit';
import subReddit from './subRedditSlice';

export default configureStore({
  reducer: {
    subReddit,
  },
  devTools: true,
});
