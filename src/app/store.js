import { configureStore } from '@reduxjs/toolkit';
import earthquakeData from '../storeClasses/earthquakeData';
import {compose,applyMiddleware} from "redux"

import thunk from "redux-thunk"

// const composeEnhancers =
//     typeof window === 'object' &&
//         window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
//         window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware([thunk]),
//     // other store enhancers if any
// );

export default configureStore({
  reducer: {
    mainstore: earthquakeData,
  },
  // enhancers : enhancer,
});
