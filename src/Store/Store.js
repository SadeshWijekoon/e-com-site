import {configureStore} from '@reduxjs/toolkit'
import categortyReaducer from './ReduxSlice/categortySlice';

const store= configureStore({
    reducer:{
      category:categortyReaducer ,
    }
})
export default store;

