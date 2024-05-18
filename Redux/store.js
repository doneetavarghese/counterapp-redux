// 1 imporet configureStore
import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';


// Create store using configure store
 export const store = configureStore({
    reducer:{
      counterReducer:counterSlice
    }
})
