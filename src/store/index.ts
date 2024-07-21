import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import managementDataSlice from "./slice";
// import rootSaga from "./sagas";

let sagamiddleware = createSagaMiddleWare();
const middleware  = [sagamiddleware];

export default configureStore({
    reducer: {
        managementData: managementDataSlice
    },
    middleware : (getdefaultMiddleWare) => {
        return getdefaultMiddleWare().concat(middleware);
    }
});

// sagamiddleware.run(rootSaga);
